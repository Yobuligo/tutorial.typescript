// Declares own type (type alias) with name 'MyOwnType'. Here a union type of 'string' and 'number' is declared
type MyOwnType = string | number;

// Initialize a variable of the  declared type.
// only values of type string and number can be assigned
const myVariable: MyOwnType = "MyString";

// Use type aliases to declare a complex object.
type Person = { firstname: string; age: number };

// Initialize a complex object using type 'Person'
const person: Person = { firstname: "Stacey", age: 20 };
