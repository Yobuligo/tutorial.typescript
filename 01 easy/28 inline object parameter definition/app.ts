// There is a possibility to initialize an object inline in the parameter interface.
// No need to create a class. No need to create an interface. 

import { println } from "../../GlobalFunctions";

class Container<T> {
  constructor(public readonly object: T) {}
}

const container = new Container({ firstname: "Stacey", lastname: "Starfish" });
println(container.object.firstname);
println(container.object.lastname);
