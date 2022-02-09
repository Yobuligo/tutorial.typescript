import { println } from "../../GlobalFunctions";
import { ICar } from "./ICar";

/**
 * Class that represents an Audi  BWM and implements interface 'ICar'
 */
export class Audi implements ICar {
  name: string = "Audi";
  start(): void {
    println("Sounds like an Audi");
  }
}
