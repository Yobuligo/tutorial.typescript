import { println } from "../../GlobalFunctions";
import { Animal } from "./Animal";

/**
 * Instances of that class represent a Duck.
 * A duck is an animal and extends class 'Animal'
 * The abstract function 'makeNoise' is redefined
 */
export class Duck extends Animal {
  constructor() {
    super("Duck");
  }

  makeNoise(): void {
    println("croak");
  }
}
