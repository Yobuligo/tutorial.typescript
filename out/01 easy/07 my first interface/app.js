"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Audi_1 = require("./Audi");
var BMW_1 = require("./BMW");
function checkSpoiler(car) {
    if (car.spoilerSize == null) {
        (0, GlobalFunctions_1.println)("".concat(car.name, " has no spoiler"));
    }
    else {
        (0, GlobalFunctions_1.println)("".concat(car.name, " has a spoiler with size ").concat(car.spoilerSize));
    }
}
// creates a variable of type 'ICar' and call function start polymorph for BMW and Audi
var car;
car = new BMW_1.BMW();
car.start();
checkSpoiler(car);
car = new Audi_1.Audi();
car.start();
checkSpoiler(car);
//# sourceMappingURL=app.js.map