import { println } from "../../GlobalFunctions";

/**
 * Class that represents a person object with properties firstname, lastname and a function to print the name
 * Use 'export' to have the ability to import the class in other files (see app.ts)
 */
export class Person {
  firstname: string;
  lastname: string;

  // use ${attribute/function} to add the result to a string
  printName() {
    println(`My name is ${this.firstname} ${this.lastname}.`);
  }
}
