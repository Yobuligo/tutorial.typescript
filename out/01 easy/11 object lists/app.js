"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const Kiefer_1 = require("./Kiefer");
const Linde_1 = require("./Linde");
// declare variable 'trees1' of type 'ITree'
const trees1 = [];
trees1.push(new Kiefer_1.Kiefer());
trees1.push(new Linde_1.Linde());
trees1[3] = new Kiefer_1.Kiefer();
// calls 'name' polymorph and prints it
trees1.forEach((tree) => GlobalFunctions_1.println(tree.name));
GlobalFunctions_1.newLine();
// declare variable 'trees2' through type inference by adding values to the list
const trees2 = [new Kiefer_1.Kiefer(), new Linde_1.Linde()];
trees2.forEach((tree) => GlobalFunctions_1.println(tree.name));
// create list without assigning it to a variable and directly print elements
[new Kiefer_1.Kiefer(), new Linde_1.Linde()].forEach((tree) => GlobalFunctions_1.println(tree.name));
//# sourceMappingURL=app.js.map