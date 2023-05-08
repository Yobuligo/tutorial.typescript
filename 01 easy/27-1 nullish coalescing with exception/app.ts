/**
 * To write more readable code the nullish coalescing operator is used.
 * But sometimes there is no alternative which can be returned. Instead an exception (throw new Error()) should be executed.
 * Nevertheless it is not possible to call ?? throw new Error(). Instead throw new Error has to be extracted in a separate function.
 * But what if a method expects a return parameter? The new 'raiseException' method has no valid return parameter. So instead it is required to use 'never' as return parameter.
 */

namespace NullishCoalescing {
  /**
   * The ValueContainer takes any value which might be null or undefined
   */
  class ValueContainer<T> {
    constructor(private value?: T) {}
    fetch(): T | undefined {
      return this.value;
    }
  }

  /**
   * The ValueProvider provides a value. It ensures that a value is provided, otherwise an exception is raised
   */
  class ValueProvider<T> {
    constructor(private valueContainer: ValueContainer<T>) {}

    /**
     * Provides the value from the value container. If the fetch method return undefined an exception is thrown instead.
     * But it wont be possible to throw the exception directly as the keyword 'throw' is no valid expression here, like the following code shows:
     *      return this.valueContainer.fetch() ?? throw new Error(``);
     *
     * Instead we provide a separate method 'raiseException'. But as this exception hasn't the correct returning type <T> the complier would complain because <T> is ensured.
     * To solve this problem the method raiseException has to return type 'never'.
     */
    provide(): T {
      return this.valueContainer.fetch() ?? this.raiseException();
    }

    /**
     * Returns type 'never' to show, it will never return a valid value
     */
    private raiseException(): never {
      throw new Error(
        `Raising Exception out of the nullish coalescing operator, as fetch hasn't returned a valid value.`
      );
    }
  }

  class Person {
    firstname: string = "Stacey";
  }

  const valueContainer = new ValueContainer<Person>();
  const valueProvider = new ValueProvider(valueContainer);
  valueProvider.provide().firstname;
}
