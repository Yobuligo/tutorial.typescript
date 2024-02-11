namespace Playground2 {
  abstract class Service<T> {
    private type: T | undefined;
  }

  interface IServiceProvider {
    fetch<T>(definition: new () => Service<T>): T | undefined;
    put<T>(definition: new () => Service<T>, service: T): void;
  }

  class ServiceProvider implements IServiceProvider {
    private services: Map<new () => Service<any>, any> = new Map();

    fetch<T>(definition: new () => Service<T>): T | undefined {
      return this.services.get(definition);
    }

    put<T>(definition: new () => Service<T>, service: T): void {
      this.services.set(definition, service);
    }
  }

  interface IFactory {
    create(): string;
  }

  class FactoryService extends Service<IFactory> {}

  class Factory implements IFactory {
    create(): string {
      return "hello world";
    }
  }

  const sp: IServiceProvider = new ServiceProvider();
  sp.put(FactoryService, new Factory());
  console.log(sp.fetch(FactoryService)?.create());
}
