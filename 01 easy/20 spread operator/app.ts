import { println } from "../../GlobalFunctions";

// Copy all values from one array in another
let values = ["one", "two", "three"];
let values2 = [...values];
println(values2);

// provides the possibility to hand over elements as varargs to e.g. a constructor
class List<T> {
  private elements: T[] = [];

  constructor(...elements: T[]) {
    this.elements = elements;
  }

  printList() {
    println(this.elements);
  }
}

// hand over single value
let list = new List(1);
list.printList();

// hand over several single values
list = new List(1, 2, 3, 4, 5);
list.printList();

// hand over an array to a spread operator which was defined before
const elements = [11, 12, 13, 14, 15];
list = new List(...elements);
list.printList();

// hand over an array to a spread operator
list = new List(...[11, 12, 13, 14, 15]);
list.printList();

// the spread operator can also be used for objects to take over all properties of an object
// 'mySecondPerson takes of all properties of 'myFirstPerson' and adds the property age
const myFirstPerson = {
  firstname: "Peter",
  lastname: "Hoffmann",
};

const mySecondPerson = {
  ...myFirstPerson,
  age: 28,
};

// So the spread operator can be used to clone / copy objects
const myThirdPerson = { ...myFirstPerson };
