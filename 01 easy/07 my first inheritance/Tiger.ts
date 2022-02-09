import { println } from "../../GlobalFunctions";
import { Animal } from "./Animal";

/**
 * Instances of that class represent a Tiger.
 * A tiger is an animal and extends class 'Animal'
 * The abstract function 'makeNoise' is redefined
 */
export class Tiger extends Animal {
  constructor() {
    super("Tiger");
  }

  makeNoise(): void {
    println("Roar");
  }
}
