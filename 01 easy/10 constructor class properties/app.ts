import { println } from "../../GlobalFunctions";

class OctopusBefore {
  private name: string = "";
  arms: number = 0;

  constructor(name: string, arms: number) {
    this.name = name;
    this.arms = arms;
  }

  getName(): string {
    return this.name;
  }
}

class OctopusAfter {
  // by using readonly <name>: <type> a immutable class property is provided
  // by using public <name>: <type> a public mutable class property is provided
  // in both cases there is no need to declare separate class properties
  // by using public, protected, private the visibility of the property can be changed. For readonly is public by default. So 'readonly name: string' would work as well.
  constructor(private readonly name: string, public arms: number) {}

  getName(): string {
    return this.name;
  }
}

const octopus = new OctopusAfter("Otto", 8);
octopus.arms = 7; // property arm is mutable
println(octopus.getName());
println(octopus.arms);
