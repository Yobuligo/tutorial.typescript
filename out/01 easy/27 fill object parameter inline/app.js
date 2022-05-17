"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Container = /** @class */ (function () {
    function Container(object) {
        this.object = object;
    }
    return Container;
}());
var container = new Container({ firstname: "Stacey", lastname: "Starfish" });
(0, GlobalFunctions_1.println)(container.object.firstname);
(0, GlobalFunctions_1.println)(container.object.lastname);
//# sourceMappingURL=app.js.map