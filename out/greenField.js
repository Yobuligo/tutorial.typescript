"use strict";
/**
 * Test your code here before moving it into a concrete chapter
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("./GlobalFunctions");
/**
 * TypeScript to ABAP
 * - Restriction of names (30 characters)
 * - Namespace
 */
const Config = {
    isLoggingActive: true,
    needsSendingToBackend: true,
    delayInMillis: 200
};
function updateConfig(json) {
    for (const prop in json) {
        if (Config[prop] !== undefined) {
            Config[prop] = json[prop];
        }
    }
}
const json = JSON.parse('{"isLoggingActive":"false","needsSendingToBackend": "false","delayInMillis":"300"}');
updateConfig(json);
// println(`${Config.isLoggingActive}, ${Config.needsSendingToBackend}`);
(0, GlobalFunctions_1.println)(Config);
//# sourceMappingURL=greenField.js.map