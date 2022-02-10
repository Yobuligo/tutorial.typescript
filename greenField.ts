/**
 * Test your code here before moving it in a concrete chapter
 */

class Test<T> {
  selectProperty<P>(object: T, selector: (object: T) => P): P {
    return selector(object);
  }
}

class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number
  ) {}
}

const test = new Test<Person>();
const person = new Person("Stacey", "Starfish", 30);
const age = test.selectProperty(person, (person) => {
  return person.age;
});
