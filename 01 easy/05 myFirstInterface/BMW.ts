import { ICar } from "./ICar";

/**
 * Class that represents a BWM and implements interface 'ICar'
 */
export class BMW implements ICar {
  name: String = "BMW";
  start(): void {
    console.log(`Sounds like a BMW`);
  }
}
