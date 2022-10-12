"use strict";
/**
 * Test your code here before moving it into a concrete chapter
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("./GlobalFunctions");
class EventService {
    constructor() {
        this.eventHandlers = [];
    }
    register(eventHandler) {
        this.eventHandlers.push(eventHandler);
    }
    unregister(eventHandler) {
        this.eventHandlers.indexOf(eventHandler);
    }
}
const eventHandlers = [];
const eventHandler1 = () => { };
const eventHandler2 = () => { };
const eventHandler3 = () => { };
eventHandlers.push(eventHandler1);
eventHandlers.push(eventHandler2);
eventHandlers.push(eventHandler3);
GlobalFunctions_1.println(eventHandlers.indexOf(eventHandler2));
//# sourceMappingURL=Playground.js.map