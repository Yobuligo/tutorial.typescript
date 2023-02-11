"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
class OctopusBefore {
    constructor(name, arms) {
        this.name = "";
        this.arms = 0;
        this.name = name;
        this.arms = arms;
    }
    getName() {
        return this.name;
    }
}
class OctopusAfter {
    // by using readonly <name>: <type> a immutable class property is provided
    // by using public <name>: <type> a public mutable class property is provided
    // in both cases there is no need to declare separate class properties
    // by using public, protected, private the visibility of the property can be changed. For readonly is public by default. So 'readonly name: string' would work as well.
    constructor(name, arms) {
        this.name = name;
        this.arms = arms;
    }
    getName() {
        return this.name;
    }
}
const octopus = new OctopusAfter("Otto", 8);
octopus.arms = 7; // property arm is mutable
GlobalFunctions_1.println(octopus.getName());
GlobalFunctions_1.println(octopus.arms);
//# sourceMappingURL=app.js.map