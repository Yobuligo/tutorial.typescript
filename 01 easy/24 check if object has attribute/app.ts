// as there is no way to check if an object is an instance of a type
// it is possible to use instead the possibility to check, if an object has a specific attribute
// and you can do it like that

import { println } from "../../GlobalFunctions";

interface IEmployee {
  firstname: string;
  lastname: string;
}

interface IAdmin {
  privileges: string[];
}

class Employee implements IEmployee, IAdmin {
  privileges: string[] = ["add", "delete"];
  firstname: string = "Stacey";
  lastname: string = "Starfish";
}

class Admin implements IAdmin {
  privileges: string[] = ["add", "delete"];
}

let something: any = new Employee();
if ("firstname" in something) {
  println(something.firstname);
} else {
  println("Employee has no property firstname");
}

something = new Admin();
if ("firstname" in something) {
  println(something.firstname);
} else {
  println("Admin has no property firstname");
}
