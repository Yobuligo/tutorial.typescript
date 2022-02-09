/**
 * Abstract class animal, with constructor, abstract function makeNoise
 */
export abstract class Animal {
  private name: String = "";

  constructor(name: String) {
    this.name = name;
  }

  abstract makeNoise(): void;

  sayYourName(): void {
    console.log(`My name is ${this.name}`);
  }

  introduce(): void {
    this.makeNoise();
    this.sayYourName();
  }
}
