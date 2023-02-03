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

// An alternative is to use the keyword for assertion "as"
let person2 = { firstname: "Bertha", lastname: "Bear" } as IPerson;

println(`Hey this is ${person.firstname} ${person.lastname}`);
println(`Hey this is ${person2.firstname} ${person2.lastname}`);

// Cast a string to a number
const myNumber = Number("123");
println(myNumber);
