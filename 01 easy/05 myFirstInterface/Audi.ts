import { ICar } from "./ICar";

/**
 * Class that represents an Audi  BWM and implements interface 'ICar'
 */
export class Audi implements ICar {
  name: String = "Audi";
  start(): void {
    console.log("Sounds like an Audi");
  }
}
