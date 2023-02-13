/**
 * The following code shows an example of how to implement a ServiceProvider in TypeScript
 */

namespace ServiceProvider {
  /**
   * This enum is contains the two possible types how a service can be instantiated. Either as singleton or multiple, which means for each request a new service instance is created.
   */
  enum ServiceInstanceType {
    SINGLE_INSTANTIABLE,
    MULTI_INSTANTIABLE,
  }

  /**
   * As in TypeScript interfaces are only a type which exists during design time but not at runtime, it is not possible write code like SP.fetch<IServiceName>().
   * The generics type <IServiceName> couldn't be analyzed. So it is necessary to have a concrete service type.
   * So there must be a class which connects the Service, which might only be an interface with a concrete type that can be provided to the service provider.
   * Therefore for each service a separate class has to be provided which is inherited from @class {Service}. The parameter @param {T} contains the general service type.
   */
  abstract class Service<T> {
    instance: T = {} as T;
  }

  /**
   * An implementation of this interface is responsible for providing all information of a service definition.
   * The @property {abstractServiceType} represents the ServiceClass, which connects a concrete type (the service class itself) and the Service type (e.g. an interface)
   * The @property {concreteServiceType} represents the concrete class which gets initialized when a service is requested.
   * The @property {serviceInstanceType} defines if it is a single or a multiple instantiable service.
   * The @property {service} represents a single instance which is either created by the @property {concreteServiceType} or was set via method put at the @interface {IServiceProvider}
   */
  interface IServiceDefinition<T extends Service<any>, K extends keyof T> {
    abstractServiceType: new () => T;
    concreteServiceType?: new () => T[K];
    serviceInstanceType: ServiceInstanceType;
    service?: T[K];
  }

  /**
   * An implementation of this interface represents a service provider.
   */
  interface IServiceProvider {
    contains<T extends Service<any>>(abstractServiceType: new () => T): boolean;
    fetch<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T
    ): T[K];
    fetchOrNull<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T
    ): T[K] | undefined;
    put<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T,
      service: T[K]
    ): void;
    remove<T extends Service<any>>(abstractServiceType: new () => T): void;
    register<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T,
      concreteServiceType: new () => T[K],
      serviceInstanceType: ServiceInstanceType
    ): void;
  }

  class ServiceProvider implements IServiceProvider {
    private serviceDefinitions: IServiceDefinition<any, any>[] = [];

    contains<T extends Service<any>>(
      abstractServiceType: new () => T
    ): boolean {
      return this.findServiceDefinition(abstractServiceType) !== undefined;
    }

    fetch<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T
    ): T[K] {
      const service = this.fetchOrNull(abstractServiceType);
      if (service !== undefined) {
        return service as T[K];
      }

      throw new Error(
        `Error while fetching service '${abstractServiceType.name}'. Service is unknown. Register the service or put it to the service provider.`
      );
    }

    fetchOrNull<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T
    ): T[K] | undefined {
      const serviceDefinition = this.findServiceDefinition(abstractServiceType);
      if (serviceDefinition === undefined) {
        return;
      }

      switch (serviceDefinition.serviceInstanceType) {
        case ServiceInstanceType.SINGLE_INSTANTIABLE: {
          return this.fetchSingleInstantiableService<T, K>(serviceDefinition);
        }
        case ServiceInstanceType.MULTI_INSTANTIABLE: {
          return this.createService(serviceDefinition) as T[K];
        }
        default: {
          throw new Error(
            `Error while fetching service ${abstractServiceType.name}. ServiceInstanceType ${serviceDefinition.serviceInstanceType} is unknown.`
          );
        }
      }
    }

    put<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T,
      service: T[K]
    ): void {
      this.findServiceDefinition(abstractServiceType);
      const serviceDefinition: IServiceDefinition<T, K> = {
        abstractServiceType: abstractServiceType,
        serviceInstanceType: ServiceInstanceType.SINGLE_INSTANTIABLE,
        service: service,
      };
      this.addServiceDefinition(serviceDefinition);
    }

    remove<T extends Service<any>>(abstractServiceType: new () => T): void {
      const index = this.serviceDefinitions.findIndex((serviceDefinition) => {
        return serviceDefinition.abstractServiceType === abstractServiceType;
      });

      if (index === -1) {
        return;
      }

      this.serviceDefinitions.splice(index, 1);
    }

    register<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T,
      concreteServiceType: new () => T[K],
      serviceInstanceType: ServiceInstanceType
    ): void {
      const serviceDefinition: IServiceDefinition<T, K> = {
        abstractServiceType: abstractServiceType,
        concreteServiceType: concreteServiceType,
        serviceInstanceType: serviceInstanceType,
      };
      this.addServiceDefinition(serviceDefinition);
    }

    private findServiceDefinition<T extends Service<any>, K extends keyof T>(
      abstractServiceType: new () => T
    ): IServiceDefinition<T, K> | undefined {
      return this.serviceDefinitions.find((serviceDefinition) => {
        return serviceDefinition.abstractServiceType === abstractServiceType;
      });
    }

    private addServiceDefinition<T extends Service<any>, K extends keyof T>(
      serviceDefinition: IServiceDefinition<T, K>
    ): void {
      if (this.contains(serviceDefinition.abstractServiceType)) {
        this.remove(serviceDefinition.abstractServiceType);
      }

      this.serviceDefinitions.push(serviceDefinition);
    }

    private fetchSingleInstantiableService<
      T extends Service<any>,
      K extends keyof T
    >(serviceDefinition: IServiceDefinition<T, keyof T>): T[K] | undefined {
      if (serviceDefinition.service === undefined) {
        serviceDefinition.service = this.createService(serviceDefinition);
      }
      return serviceDefinition.service as T[K] | undefined;
    }

    private createService<T extends Service<any>, K extends keyof T>(
      serviceDefinition: IServiceDefinition<T, K>
    ): T[K] | undefined {
      if (serviceDefinition.concreteServiceType === undefined) {
        return undefined;
      }
      return new serviceDefinition.concreteServiceType();
    }
  }

  /**
   * Provide a logger Service
   * 1. Provide the interface that represents the service
   * 2. Provide the service class that is responsible for connecting a valid type in TypeScript with the service interface
   * 3. Implement the service interface
   * 4. Provide the service to the service provider
   */
  interface ILogger {
    log(message: string): void;
  }

  class LoggerService extends Service<ILogger> {}

  class Logger implements ILogger {
    log(message: string): void {
      console.log(message);
    }
  }

  const serviceProvider = new ServiceProvider();
  serviceProvider.register(
    LoggerService,
    Logger,
    ServiceInstanceType.SINGLE_INSTANTIABLE
  );

  const logger = serviceProvider.fetch(LoggerService);
  logger.log(`Test`);

  serviceProvider.contains(LoggerService);
  serviceProvider.fetchOrNull(LoggerService)?.log(`Test`);
  serviceProvider.remove(LoggerService);
}
