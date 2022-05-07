import { println } from "../../GlobalFunctions";

class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number
  ) {}
}

let user = new User("Stacey", "Starfish", 30);
let copy = { ...user };
println(copy);
