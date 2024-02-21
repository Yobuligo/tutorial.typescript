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
    instance: T | undefined;
  }

  type ServiceType<T> = new () => Service<T>;

  /**
   * An implementation of this interface is responsible for providing all information of a service definition.
   * The @property {abstractServiceType} represents the ServiceClass, which connects a concrete type (the service class itself) and the Service type (e.g. an interface)
   * The @property {concreteServiceType} represents the concrete class which gets initialized when a service is requested.
   * The @property {serviceInstanceType} defines if it is a single or a multiple instantiable service.
   * The @property {service} represents a single instance which is either created by the @property {concreteServiceType} or was set via method put at the @interface {IServiceProvider}
   */
  interface IServiceDefinition<T> {
    abstractServiceType: ServiceType<T>;
    concreteServiceType?: new () => T;
    serviceInstanceType: ServiceInstanceType;
    service?: T;
  }

  /**
   * An implementation of this interface represents a service provider.
   */
  interface IServiceProvider {
    contains<T>(abstractServiceType: ServiceType<T>): boolean;
    fetch<T>(abstractServiceType: ServiceType<T>): T;
    fetchOrNull<T>(abstractServiceType: ServiceType<T>): T | undefined;
    put<T>(abstractServiceType: ServiceType<T>, service: T): void;
    remove<T>(abstractServiceType: ServiceType<T>): void;
    register<T>(
      abstractServiceType: ServiceType<T>,
      concreteServiceType: new () => T,
      serviceInstanceType: ServiceInstanceType
    ): void;
  }

  class ServiceProvider implements IServiceProvider {
    private serviceDefinitions: IServiceDefinition<unknown>[] = [];

    contains<T>(abstractServiceType: ServiceType<T>): boolean {
      return this.findServiceDefinition(abstractServiceType) !== undefined;
    }

    fetch<T>(abstractServiceType: ServiceType<T>): T {
      const service = this.fetchOrNull(abstractServiceType);
      if (service !== undefined) {
        return service as T;
      }

      throw new Error(
        `Error while fetching service '${abstractServiceType.name}'. Service is unknown. Register the service or put it to the service provider.`
      );
    }

    fetchOrNull<T>(abstractServiceType: ServiceType<T>): T | undefined {
      const serviceDefinition = this.findServiceDefinition(abstractServiceType);
      if (serviceDefinition === undefined) {
        return;
      }

      switch (serviceDefinition.serviceInstanceType) {
        case ServiceInstanceType.SINGLE_INSTANTIABLE: {
          return this.fetchSingleInstantiableService<T>(serviceDefinition);
        }
        case ServiceInstanceType.MULTI_INSTANTIABLE: {
          return this.createService(serviceDefinition) as T;
        }
        default: {
          throw new Error(
            `Error while fetching service ${abstractServiceType.name}. ServiceInstanceType ${serviceDefinition.serviceInstanceType} is unknown.`
          );
        }
      }
    }

    put<T>(abstractServiceType: ServiceType<T>, service: T): void {
      this.findServiceDefinition(abstractServiceType);
      const serviceDefinition: IServiceDefinition<T> = {
        abstractServiceType: abstractServiceType,
        serviceInstanceType: ServiceInstanceType.SINGLE_INSTANTIABLE,
        service: service,
      };
      this.addServiceDefinition(serviceDefinition);
    }

    remove<T>(abstractServiceType: ServiceType<T>): void {
      const index = this.serviceDefinitions.findIndex((serviceDefinition) => {
        return serviceDefinition.abstractServiceType === abstractServiceType;
      });

      if (index === -1) {
        return;
      }

      this.serviceDefinitions.splice(index, 1);
    }

    register<T>(
      abstractServiceType: ServiceType<T>,
      concreteServiceType: new () => T,
      serviceInstanceType: ServiceInstanceType
    ): void {
      const serviceDefinition: IServiceDefinition<T> = {
        abstractServiceType: abstractServiceType,
        concreteServiceType: concreteServiceType,
        serviceInstanceType: serviceInstanceType,
      };
      this.addServiceDefinition(serviceDefinition);
    }

    private findServiceDefinition<T>(
      abstractServiceType: ServiceType<T>
    ): IServiceDefinition<T> | undefined {
      return this.serviceDefinitions.find((serviceDefinition) => {
        return serviceDefinition.abstractServiceType === abstractServiceType;
      }) as IServiceDefinition<T>;
    }

    private addServiceDefinition<T>(
      serviceDefinition: IServiceDefinition<T>
    ): void {
      if (this.contains(serviceDefinition.abstractServiceType)) {
        this.remove(serviceDefinition.abstractServiceType);
      }

      this.serviceDefinitions.push(serviceDefinition);
    }

    private fetchSingleInstantiableService<T>(
      serviceDefinition: IServiceDefinition<T>
    ): T | undefined {
      if (serviceDefinition.service === undefined) {
        serviceDefinition.service = this.createService(serviceDefinition);
      }
      return serviceDefinition.service as T | undefined;
    }

    private createService<T>(
      serviceDefinition: IServiceDefinition<T>
    ): T | undefined {
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
