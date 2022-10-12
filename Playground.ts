/**
 * Test your code here before moving it into a concrete chapter
 */

import { println } from "./GlobalFunctions";

class EventService {
  private eventHandlers: (() => {})[] = [];

  register(eventHandler: () => {}) {
    this.eventHandlers.push(eventHandler);
  }

  unregister(eventHandler: () => {}) {
    this.eventHandlers.indexOf(eventHandler);
  }
}

const eventHandlers: (() => void)[] = [];
const eventHandler1: () => void = () => {};
const eventHandler2: () => void = () => {};
const eventHandler3: () => void = () => {};
eventHandlers.push(eventHandler1);
eventHandlers.push(eventHandler2);
eventHandlers.push(eventHandler3);

println(eventHandlers.indexOf(eventHandler2))
