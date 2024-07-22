/**
 * Often we need services, which are singletons or which should be created on demand.
 * To not always write the same code for singletons, we can introduce a class, that creates the instances for you.
 *
 * Or even we can create a normal factory method in addition
 * Keep in mind that you will lose your possibility to inherit by using that approach:
 * for that find a solution at the end of this chapter
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
    static create<T>(this: Constructor<T>): T {
      return new this();
    }

    static getInstance<T>(this: Constructor<T>): T {
      return SingletonRepo.getInstance().fetch(this);
    }
  }

  class FirstService extends Singleton {
    sayHello() {
      console.log("Hello");
    }
  }

  FirstService.getInstance().sayHello();
  const firstService = FirstService.create();
  firstService.sayHello();

  /**
   * An here comes an approach to not lose your possibility to inherit
   * Instead user the same possibility like for companion objects
   * Provide a function that adds functionality and that takes another class to inherit from
   */
  function CompanionSingleton<TBase extends new (...args: any[]) => any>(
    Base: TBase
  ) {
    return class Singleton extends Base {
      static getInstance<T>(this: new () => T) {
        return SingletonRepo.getInstance().fetch(this);
      }
    };
  }

  class SecondService {
    sayHelloSecondService() {
      console.log("Say hello second service");
    }
  }

  class ThirdService extends CompanionSingleton(SecondService) {
    sayHelloThirdService() {
      console.log("Say hello third service");
    }
  }

  ThirdService.getInstance().sayHelloSecondService();
  ThirdService.getInstance().sayHelloThirdService();
}
