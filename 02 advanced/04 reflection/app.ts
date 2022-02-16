import "reflect-metadata";

class Person {
  constructor(public firstname: String, public lastname: String) {}
}

const person = new Person("Stacey", "Starfish");
