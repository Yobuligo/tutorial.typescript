// defines a lambda expression (an expression that can be assigned to a variable and which is executable)
// instead of only assigning values (String, Number, etc.) and references (class instances) to a variable, functions can be assigned as well
// the lambda expression contains of a parameter part and an implementation body
// the parameter of the functions are provided via (). It can consist of importing and returning parameter (x: type): type
// the implementation body is separated from the parameters via =>
// the implementation body, the productive code itself, is provided between {}

// declare a lambda expression
let lambdaExpression = () => {
  console.log("lambda was executed");
};

// as the variable 'lambdaExpression' is a function it can be executed
lambdaExpression();

//declare a lambda expression that returns the sum of two values
let sumLambdaExpression = (x: number, y: number): number => {
  return x + y;
};

//print the result
console.log(sumLambdaExpression(1, 2));
