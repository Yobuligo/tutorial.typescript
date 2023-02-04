/**
 * In TypeScript classes must not only have properties and methods but they can also have functions.
 * That helps to transfer the reference of that class function to call it later.
 */
class ClassFunction {
    constructor(text) {
        this.text = text;
        this.printText = () => {
            console.log(`The text was ${this.text}`);
        };
    }
}
const classFunction = new ClassFunction("Demo");
const refToFunction = classFunction.printText;
console.log(`The variable refToFunction refers to the class function printText. It is possible to call this function later. Lets do it now`);
refToFunction();
//# sourceMappingURL=app.js.map