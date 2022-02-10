import { println } from "../../GlobalFunctions";
import { ITree } from "./ITree";
import { Kiefer } from "./Kiefer";
import { Linde } from "./Linde";

// declare variable 'trees1' of type 'ITree'
const trees1: ITree[] = [];
trees1.push(new Kiefer());
trees1.push(new Linde());
trees1[3] = new Kiefer();

// calls 'name' polymorph and prints it
trees1.forEach((tree) => println(tree.name));

println("");

// declare variable 'trees2' through type inference by adding values to the list
const trees2 = [new Kiefer(), new Linde()];
trees2.forEach((tree) => println(tree.name));

// create list without assigning it to a variable and directly print elements
[new Kiefer(), new Linde()].forEach((tree) => println(tree.name));
