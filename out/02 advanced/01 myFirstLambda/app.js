// defines a lambda expression
// instead of only assigning values (String, Number, etc.) and references (class instances) to a variable, functions can be assigned as well
// the lambda expression contains of a variable part and and implementation body
// the variables of the functions are provided via (). It can contain of importing and returning variables (x: type): type
// the implementation body is separated from the variables via => and the implementation body, the productive code itself is provided between {}
// declare a lambda expression
var lambdaExpression = function () {
    console.log("lambda was executed");
};
// as the variable 'lambdaExpression' is a function it can be executed
lambdaExpression();
//declare a lambda expression that returns the sum of two values
var sumLambdaExpression = function (x, y) {
    return x + y;
};
//print the result
console.log(sumLambdaExpression(1, 2));
//# sourceMappingURL=app.js.map