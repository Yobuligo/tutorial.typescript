"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const Audi_1 = require("./Audi");
const BMW_1 = require("./BMW");
function checkSpoiler(car) {
    if (car.spoilerSize == null) {
        GlobalFunctions_1.println(`${car.name} has no spoiler`);
    }
    else {
        GlobalFunctions_1.println(`${car.name} has a spoiler with size ${car.spoilerSize}`);
    }
}
// creates a variable of type 'ICar' and call function start polymorph for BMW and Audi
let car;
car = new BMW_1.BMW();
car.start();
checkSpoiler(car);
car = new Audi_1.Audi();
car.start();
checkSpoiler(car);
//# sourceMappingURL=app.js.map