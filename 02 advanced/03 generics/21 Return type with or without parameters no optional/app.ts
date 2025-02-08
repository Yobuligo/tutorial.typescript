/**
 * In same cases we have functions which might need an importing parameter or not.
 * We could call that function with an optional parameter. But then the caller wouldn't know when to fill it.
 *
 * Here comes how you can solve these problems:
 */

namespace ReturnTypeWithOrWithoutParameters {
  /**
   * We have to specify a new type.
   * With type condition we can analyze the type. if it is void, we return a function type without parameters
   * On the other hand we return a function which has a parameter value of the generic type
   */
  type MyFunc<T = void> = T extends void ? () => void : (value: T) => void;

  /**
   * We need a function to create our function
   */
  const createFunc = <T = void>(): MyFunc<T> => {
    return ((value?: any) => {
      // here comes whatever this function has to do
    }) as MyFunc<T>;
  };

  /**
   * Now create and call the function.
   * We start by not providing any generic parameter. There is no need to provide any parameter
   */
  const myFunc = createFunc();
  myFunc();

  /**
   * Now we continue with providing a function which requires a parameter.
   */
  const myFunc2 = createFunc<number>();
  myFunc2(123);
}
