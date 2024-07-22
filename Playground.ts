import { repeat } from "./core/repeat";

namespace Playground {
  type GenericConstructor = new (...args: any[]) => {};

  function CompanionSingleton<TBase extends GenericConstructor>(Base: TBase) {
    return class Singleton extends Base {
      static getInstance<T>(this: new () => T): T {
        return new this();
      }
    };
  }

  abstract class Singleton {
    static getInstance<T>(this: new () => T): T {
      return new this();
    }
  }

  class Animal {
    name = "Stacey";
  }

  class Service extends CompanionSingleton(Animal) {
    lastname = "Starfish";
  }
}
