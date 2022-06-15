"use strict";
/**
 * Test your code here before moving it into a concrete chapter
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("./GlobalFunctions");
class MyLogger {
    log(tag, text) {
        if (typeof (tag) == "object") {
            (0, GlobalFunctions_1.println)(tag.constructor.name);
            // const text = tag as any
            // println(text.name)
        }
        console.log(`${tag}: ${text}`);
    }
}
class MyTest {
    test() {
        const logger = new MyLogger();
        logger.log(this, "test");
    }
}
const myTest = new MyTest();
myTest.test();
//# sourceMappingURL=greenField.js.map