"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
class Plant {
    constructor() {
        this._name = "";
        this._countGetName = 0;
        this._countSetName = 0;
    }
    // declares a getter for _name which provides a possibility to do something before return the value
    // in this example count the number of getting the name
    get name() {
        this._countGetName++;
        return this._name;
    }
    // same for set but with the new 'value' as parameter
    set name(value) {
        this._countSetName++;
        this._name = value;
    }
    get countGetName() {
        return this._countGetName;
    }
    get countSetName() {
        return this._countSetName;
    }
}
const plant = new Plant();
plant.name = "Areca Palm";
plant.name = "Aloe Vera";
plant.name = "English Ivy";
(0, GlobalFunctions_1.println)(plant.countGetName);
(0, GlobalFunctions_1.println)(plant.countSetName);
//# sourceMappingURL=app.js.map