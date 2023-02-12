"use strict";
// There is a possibility to initialize an object inline in the parameter interface.
// No need to create a class. No need to create an interface and even functions can directly be implemented
var inlineFunction = {
    testParameter: "Test Parameter Value",
    testFunction: function () {
        console.log("the function can directly be implemented when the corresponding object is initialized and assigned to a variable");
    },
};
inlineFunction.testFunction();
//# sourceMappingURL=app.js.map