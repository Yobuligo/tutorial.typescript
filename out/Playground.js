"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repeat_1 = require("./core/repeat");
const history = new Map();
const buildHistory = () => {
    (0, repeat_1.repeat)(27, (index) => {
        if (index > 0) {
            history.set(index, 0);
        }
    });
};
const logHistory = (index) => {
    let entry = history.get(index);
    if (entry === undefined) {
        history.set(index, 1);
    }
    else {
        entry++;
        history.set(index, entry);
    }
};
const printHistory = () => {
    history.forEach((number, index) => {
        console.log(`${index} was calculated ${number} times.`);
    });
};
buildHistory();
(0, repeat_1.repeat)(1000, () => {
    const percent = Math.random();
    const index = Math.ceil(percent * 26);
    logHistory(index);
});
printHistory();
//# sourceMappingURL=Playground.js.map