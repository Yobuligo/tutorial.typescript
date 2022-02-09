"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Audi_1 = require("./Audi");
var BMW_1 = require("./BMW");
// creates a variable of type 'ICar' and call function start polymorph for BMW and Audi
var car;
car = new BMW_1.BMW();
car.start();
car = new Audi_1.Audi();
car.start();
//# sourceMappingURL=app.js.map