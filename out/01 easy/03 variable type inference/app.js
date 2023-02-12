// declare a changeable variable via type inference. There is no need to specify the type. It is derived from the assigned value. Here string.
// it works for basic types as well as for lists, references, enums etc.
var changeableValueByTypeInference = "Thanks to let, I am changeable";
console.log(changeableValueByTypeInference);
changeableValueByTypeInference = "Now I am changed";
console.log(changeableValueByTypeInference);
//# sourceMappingURL=app.js.map