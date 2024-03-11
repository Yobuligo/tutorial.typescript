/**
 * The following example shows how to infer functional parameters.
 *
 * Imagine you have to implement a generic event handler class, which can notify handlers. In case that the handler need a property, you have to know the kind of property.
 * Here comes how it might look like
 */

namespace InferFunctionParameterTypes {
  /**
   * The type checks, if the given {@link T} is of type function. In that case it infers the parameters in type {@link TParams}.
   */
  type FunctionParams<T> = T extends (...args: infer TParams) => void
    ? TParams
    : [];

  /**
   * Type {@link Test} has a firstname and an age, but as tuple
   */
  type Test = FunctionParams<(firstname: string, age: number) => void>;

  /**
   * Type {@link Test2} is an empty tuple, as the generic type to {@link FunctionParams} is not a function with parameters
   */
  type Test2 = FunctionParams<string>;

  /**
   * Here comes the example for a generic event class
   */
  class Event<THandler extends Function> {
    private handlers: THandler[] = [];

    notify(...args: FunctionParams<THandler>) {
      this.handlers.forEach((handler) => handler(...args));
    }

    addHandler(handler: THandler) {
      this.handlers.push(handler);
      return () => {
        const index = this.handlers.findIndex((item) => item === handler);
        if (index !== -1) {
          this.handlers.splice(index, 1);
        }
      };
    }
  }

  /**
   * And here comes an example how to use it
   * 1. the type for the handlers is created {@link OnTickHandler}
   * 2. a new Event is created, that handles {@link OnTickHandler}
   * 3. now each handler, that registers, can provide a handler, with the required parameters
   * 4. When notifying the handlers, the notify method has to be called with the required params
   */
  type OnTickHandler = (tick: number) => void;
  const tickEvent = new Event<OnTickHandler>();
  tickEvent.addHandler((tick) => {
    console.log(`here is my tick`);
  });
  tickEvent.notify(12);

  type OnFinishHandler = () => void;
  const finishEvent = new Event<OnFinishHandler>();
  finishEvent.addHandler(() => {
    console.log(`here is my on finish event`);
  });
  finishEvent.notify();
}
