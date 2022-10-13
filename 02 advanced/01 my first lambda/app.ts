// defines a lambda expression (an expression that can be assigned to a variable and which is executable)
// instead of only assigning values (string, number, etc.) and references (class instances) to a variable, functions can be assigned as well
// the lambda expression contains of a parameter part and an implementation body
// the parameter of the functions are provided via (). It can consist of importing and returning parameter (x: type): type
// the implementation body is separated from the parameters via =>
// the implementation body, the productive code itself, is provided between {}
// in typescript it is called Arrow Function

import { println } from "../../GlobalFunctions";

// declare a lambda expression
let lambdaExpression = () => {
  println("lambda was executed");
};

// as the variable 'lambdaExpression' is a function it can be executed
lambdaExpression();

// declare a lambda expression that returns the sum of two values. As a function is assigned the type is 'Function'.
// By inferring the type ': Function' can be removed.
let sumLambdaExpression: Function = (x: number, y: number): number => {
  return x + y;
};

// print the result
println(sumLambdaExpression(1, 2));

// declare a lambda expression in shorter for single-line returns
let shortSumLambdaExpression = (x: number, y: number): number => x + y;





