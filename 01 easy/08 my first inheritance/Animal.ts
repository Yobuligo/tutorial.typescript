import { println } from "../../GlobalFunctions";

/**
 * Abstract class animal, with constructor, abstract function makeNoise
 */
export abstract class Animal {
  private name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  abstract makeNoise(): void;

  sayYourName(): void {
    println(`My name is ${this.name}`);
  }

  introduce(): void {
    this.makeNoise();
    this.sayYourName();
  }
}
