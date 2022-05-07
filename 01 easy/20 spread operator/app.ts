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

let list = new List(1);
list.printList();
list = new List(1, 2, 3, 4, 5);
list.printList();
