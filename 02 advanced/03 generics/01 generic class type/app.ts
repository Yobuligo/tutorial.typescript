import { println } from "../../../GlobalFunctions";

/**
 * Class that is responsible for containing a value. Next to the creation we can access that value.
 * And we want to know the type of that value to write type safe, secure and stable code afterwards.
 * So we dont use the type 'any' but introduce a generic type T.
 * And T can have each possible type in typescript.
 * - Basic types (number, string, etc.)
 * - Reference types (object instances)
 * - Enum types (E.g. Color with Color.BLUE, Color.GREEN, etc.)
 *
 * Instead of T we could also take every other letter as well as terms.
 */
class ValueContainer<T> {
  constructor(public readonly value: T) {}
}

class Printable {
  print() {
    println("I am printable");
  }
}

enum Color {
  GREEN,
  BLUE,
}

const valueContainerString = new ValueContainer("String");
const valueContainerNumber = new ValueContainer(123);
const valueContainerReference = new ValueContainer(new Printable());
const valueContainerColor = new ValueContainer(Color.GREEN);

// Thanks to generics we exactly know 'value' is here a number so I can build a sum
// 'valueContainerString + 123' wouldn't work
const result = valueContainerNumber.value + 10;
println(result);

// Thanks to generics we know 'value' is here a printable. So I can call function 'print'.
valueContainerReference.value.print();
