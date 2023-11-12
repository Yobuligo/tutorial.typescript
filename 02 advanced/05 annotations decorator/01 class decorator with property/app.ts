/**
 * If we want to decorate a class and that decorator required parameter, we want to read these parameters.
 * But that is not working, without a Reflection Framework.
 * Instead we can have something like a repository, lets call it DecoratorInfo.
 * It is responsible for saving decorator information and for providing these information.
 *
 * In the following example we have a decorator, which provides a path.
 * Finally we want to get these path from the decorated class.
 * Therefore we have do the following steps.
 *      1. implement a DecoratorInfo which stores and returns the decorated value of a class
 *      2. Provide the class an decorate it
 *
 * As a decorator is nothing else than a function, we introduce a type Decorator, which is just a type of Function.
 * It is used as key, to check if e.g. a specific decorator exists and to get the provided value.
 */

namespace ClassDecorator {
  type Decorator = Function;

  type Constructor<T> = new (...args: any[]) => T;

  class DecoratorInfoDefault {
    private cache: Map<Constructor<any>, Map<Decorator, any>> = new Map();

    /**
     *  introduce a new decorator for the given {@link type} (class)
     */
    introduce<T>(type: Constructor<any>, decorator: Decorator, value: T) {
      const row = this.cache.get(type) ?? new Map<Decorator, any>();
      row.set(decorator, value);
      this.cache.set(type, row);
    }

    /**
     * returns a decorator value of the given {@link type} (class)
     */
    find<T>(type: Constructor<any>, decorator: Decorator): T | undefined {
      const row = this.cache.get(type);
      return row?.get(decorator);
    }
  }

  const DecoratorInfo = new DecoratorInfoDefault();

  /**
   * Provide the Decorator function.
   * The Decorator is called if the decorated class is initialized.
   * The Decorator function has to return a function that is called.
   * As target we get the decorated class.
   * So this is the time where we add the decorated class with its decorator and value to the DecoratorInfo.
   * As decorator we take the decorator function (Path) itself. So it is our key
   */
  const Path = <T extends Constructor<any>>(path: string) => {
    return (target: T) => {
      DecoratorInfo.introduce(target, Path, path);
    };
  };

  /**
   * Create a class, that should be decorated
   */
  @Path("/users")
  class Test {}

  /**
   * To get the path of the decorated class, we use the DecoratorInfo again
   */
  const path = DecoratorInfo.find(Test, Path);
  console.log(path);
}
