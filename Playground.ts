namespace Playground {
  abstract class Service<T> {
    readonly instance: T = {} as T;
  }

  interface IFactory {
    create(): string;
  }

  class Factory implements IFactory {
    create(): string {
      return "Hello World";
    }
  }

  class FactoryService extends Service<IFactory> {}

  interface ILogger {
    log(message: string): void;
  }

  class LoggerService extends Service<ILogger> {}

  interface IServiceProvider {
    fetch<T>(abstractServiceType: new () => Service<T>): T;
    fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined;
    put<T>(abstractServiceType: new () => Service<T>, service: T): void;
  }

  const error = (reason?: string): never => {
    throw new Error(reason);
  };

  class ServiceProvider implements IServiceProvider {
    private services: Map<new () => Service<any>, any> = new Map();

    fetch<T>(abstractServiceType: new () => Service<T>): T {
      return this.fetchOrNull(abstractServiceType) ?? error();
    }

    fetchOrNull<T>(abstractServiceType: new () => Service<T>): T | undefined {
      return this.services.get(abstractServiceType);
    }

    put<T>(abstractServiceType: new () => Service<T>, service: T): void {
      this.services.set(abstractServiceType, service);
    }
  }

  const SP: IServiceProvider = new ServiceProvider();
  SP.put(FactoryService, new Factory());

  console.log(SP.fetch(FactoryService).create())
}
