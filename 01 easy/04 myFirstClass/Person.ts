/**
 * Class that represents a person object with properties firstname, lastname and a function to print the name
 * Use 'export' to have the ability to import the class in other files (see app.ts)
 */
export class Person {
  firstname: String;
  lastname: String;

  // use ${attribute/function} to add the result to a string
  printName() {
    console.log(`My name is ${this.firstname} ${this.lastname}.`);
  }
}
