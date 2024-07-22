/**
 * Often we need services, which are singletons or which should be created on demand.
 * To not always write the same code for singletons, we can introduce a class, that creates the instances for you.
 *
 * Or even we can create a normal factory method in addition
 * Keep in mind that you will lose your possibility to inherit by using that approach
 */

namespace GenericSingleton {
  type Constructor<T> = new () => T;

  /**
   * The only class which needs has to implement a getInstance method, as it contains and administrates the other singletons
   */
  class SingletonRepo {
    private static _instance: SingletonRepo;
    private registry: Map<Constructor<any>, any> = new Map();

    static getInstance(): SingletonRepo {
      if (!this._instance) {
        this._instance = new SingletonRepo();
      }
      return this._instance;
    }

    fetch<T>(type: Constructor<T>): T {
      return this.registry.get(type) ?? this.create(type);
    }

    private create<T>(type: Constructor<T>): T {
      const singleton = new type();
      this.registry.set(type, singleton);
      return singleton;
    }
  }

  /**
   * Our abstract class, which provides a generic getInstance method that creates an instance depending on the underlying class
   */
  abstract class Singleton {
    static getInstance<T>(this: new () => T): T {
      return SingletonRepo.getInstance().fetch(this);
    }
  }

  class FirstService extends Singleton {
    constructor() {
      super();
    }

    sayHello() {
      console.log("Hello");
    }
  }

  FirstService.getInstance().sayHello();
}
