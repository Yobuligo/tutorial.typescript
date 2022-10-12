"use strict";
// There is a possibility to initialize an object inline in the parameter interface.
// No need to create a class. No need to create an interface. 
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
class Container {
    constructor(object) {
        this.object = object;
    }
}
const container = new Container({ firstname: "Stacey", lastname: "Starfish" });
GlobalFunctions_1.println(container.object.firstname);
GlobalFunctions_1.println(container.object.lastname);
//# sourceMappingURL=app.js.map