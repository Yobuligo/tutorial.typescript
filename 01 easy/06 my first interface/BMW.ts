import { println } from "../../GlobalFunctions";
import { ICar } from "./ICar";

/**
 * Class that represents a BWM and implements interface 'ICar'
 */
export class BMW implements ICar {
  name: string = "BMW";
  spoilerSize?: number = 123;

  start(): void {
    println(`Sounds like a BMW`);
  }
}
