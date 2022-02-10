"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Kiefer_1 = require("./Kiefer");
var Linde_1 = require("./Linde");
// declare variable 'trees1' of type 'ITree'
var trees1 = [];
trees1.push(new Kiefer_1.Kiefer());
trees1.push(new Linde_1.Linde());
trees1[3] = new Kiefer_1.Kiefer();
// calls 'name' polymorph and prints it
trees1.forEach(function (tree) { return (0, GlobalFunctions_1.println)(tree.name); });
(0, GlobalFunctions_1.println)("");
// declare variable 'trees2' through type inference by adding values to the list
var trees2 = [new Kiefer_1.Kiefer(), new Linde_1.Linde()];
trees2.forEach(function (tree) { return (0, GlobalFunctions_1.println)(tree.name); });
// create list without assigning it to a variable and directly print elements
[new Kiefer_1.Kiefer(), new Linde_1.Linde()].forEach(function (tree) { return (0, GlobalFunctions_1.println)(tree.name); });
//# sourceMappingURL=app.js.map