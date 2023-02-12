"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Plant = /** @class */ (function () {
    function Plant() {
        this._name = "";
        this._countGetName = 0;
        this._countSetName = 0;
    }
    Object.defineProperty(Plant.prototype, "name", {
        // declares a getter for _name which provides a possibility to do something before return the value
        // in this example count the number of getting the name
        get: function () {
            this._countGetName++;
            return this._name;
        },
        // same for set but with the new 'value' as parameter
        set: function (value) {
            this._countSetName++;
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "countGetName", {
        get: function () {
            return this._countGetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plant.prototype, "countSetName", {
        get: function () {
            return this._countSetName;
        },
        enumerable: false,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.name = "Areca Palm";
plant.name = "Aloe Vera";
plant.name = "English Ivy";
(0, GlobalFunctions_1.println)(plant.countGetName);
(0, GlobalFunctions_1.println)(plant.countSetName);
//# sourceMappingURL=app.js.map