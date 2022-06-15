// define a constants with the same name as the interface. Which is possible.
// and declare it has a IMeta for IHaveCaption
// Implement the function is. Which must check the attributes of the object. This is the only way in TypeScript.
// You get the name attribute for free from TypeScript (dont know why).
const IHaveCaption = function () { };
IHaveCaption.is = function (object) {
    return "caption" in object;
};
class Button {
    constructor(caption) {
        this.caption = caption;
    }
}
// create a button but mark as any. So on the first glance it doesnt not have the attribute caption (only for testing reasons)
const myObject = new Button("Click me");
if (IHaveCaption.is(myObject)) {
    // now we know myObject has a caption and I can access it (thanks to type inference)
    console.log(myObject.caption);
}
//# sourceMappingURL=app.js.map