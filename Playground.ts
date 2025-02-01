import { repeat } from "./core/repeat";

namespace Playground {
  type Decorator = Function;

  type Constructor<T> = new (...args: any[]) => T;

  class DecoratorInfo {
    private static cache: Map<Constructor<any>, Map<Decorator, any>> =
      new Map();

    /**
     *  introduce a new decorator for the given {@link type} (class)
     */
    static introduce<T>(
      type: Constructor<any>,
      decorator: Decorator,
      value: T
    ) {
      const row = this.cache.get(type) ?? new Map<Decorator, any>();
      row.set(decorator, value);
      this.cache.set(type, row);
    }

    /**
     * returns a decorator value of the given {@link type} (class)
     */
    static find<T>(
      type: Constructor<any>,
      decorator: Decorator
    ): T | undefined {
      const row = this.cache.get(type);
      return row?.get(decorator);
    }
  }

  /**
   * This type represents a constructor of service {@link T}.
   */
  type ServiceConstructor<T> = new () => T;

  /**
   * This object type represents all methods and properties of service {@link T}.
   */
  type ServiceType<T> = { [P in keyof T]: T[P] };

  /**
   * This enum provides possibilities how services can be initialized.
   */
  enum ServiceInstanceType {
    SINGLE_INSTANTIABLE,
    MULTI_INSTANTIABLE,
  }

  /**
   * This annotation declares a class as service and can be used to set up a service.
   */
  const Service = (
    serviceInstanceType: ServiceInstanceType = ServiceInstanceType.SINGLE_INSTANTIABLE
  ) => {
    return (target: Constructor<any>) => {
      DecoratorInfo.introduce(target, Service, serviceInstanceType);
    };
  };

  /**
   * This interface represents a service provider.
   * A service provider is responsible for providing services.
   */
  interface IServiceProvider {
    /**
     * This method returns a service instance of the given {@link type}.
     * The service can be set via method {@link put}, which must be of the service type,
     * otherwise an instance of {@link type} is returned.
     */
    fetch<T>(type: ServiceConstructor<T>): ServiceType<T>;

    /**
     * Sets a {@link service} of the given {@link type}.
     * The {@link service} must not be of the concrete class type of {@link type} but only contain the corresponding methods.
     */
    put<T>(type: ServiceConstructor<T>, service: ServiceType<T>): void;
  }

  /**
   * This class represents a concrete service provider.
   */
  class ServiceProvider implements IServiceProvider {
    private instances: Map<ServiceConstructor<any>, any> = new Map();
    private definitions: Map<ServiceConstructor<any>, any> = new Map();

    fetch<T>(type: ServiceConstructor<T>): ServiceType<T> {
      return this.definitions.get(type) ?? this.createService(type);
    }

    put<T>(type: ServiceConstructor<T>, service: ServiceType<T>): void {
      this.definitions.set(type, service);
    }

    private createService<T>(type: ServiceConstructor<T>): ServiceType<T> {
      // get service instantiation type
      const serviceInstanceType: ServiceInstanceType | undefined =
        DecoratorInfo.find(type, Service);
      if (this.isSingleInstantiable(serviceInstanceType)) {
        return this.instances.get(type) ?? this.fetchInstance(type);
      } else {
        // multi instantiable, create new Instance
        return new type();
      }
    }

    private fetchInstance<T>(type: ServiceConstructor<T>): ServiceType<T> {
      const instance = new type();
      this.instances.set(type, instance);
      return instance;
    }

    private isSingleInstantiable(
      serviceInstanceType: ServiceInstanceType | undefined
    ): boolean {
      return (
        serviceInstanceType === undefined ||
        serviceInstanceType === ServiceInstanceType.SINGLE_INSTANTIABLE
      );
    }
  }

  const SP: IServiceProvider = new ServiceProvider();

  interface IMyService {
    sayHello(): void;
  }

  let counter = 0;
  const uuid = () => {
    counter++;
    return counter;
  };

  @Service()
  class MyService implements IMyService {
    private id = uuid();

    sayHello() {
      console.log(`Hallo, ich bin MyService mit der uuid ${this.id}`);
    }

    private print() {
      console.log("Test");
    }
  }

  //   class MyService2 {
  //     private myService = SP.fetch(MyService);

  //     test() {
  //       this.myService.sayHello();
  //     }
  //   }

  //   class MyMock implements IMyService {
  //     sayHello(): void {
  //       console.log("Hallo, ich bin MyMock");
  //     }
  //   }

  repeat(5, () => {
    const myService = SP.fetch(MyService);
    myService.sayHello();
  });
}
