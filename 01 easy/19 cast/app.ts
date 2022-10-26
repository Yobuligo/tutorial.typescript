import { println } from "../../GlobalFunctions";

// Define the interface Person
export interface IPerson {
  firstname: string;
  lastname: string;
}

// declare a variable 'person' and provide the attributes 'firstname', 'lastname' and cast it by '<IPerson>' to the type 'IPerson'.
let person = <IPerson>{
  firstname: "Stacey",
  lastname: "Starfish",
};

println(`Hey this is ${person.firstname} ${person.lastname}`);

// Cast a string to a number
const myNumber = Number("123");
println(myNumber);
