/**
 * A decorator can be considered like annotations in Kotlin but less powerful.
 * A decorator is a function that is called and which can have parameters.
 * The decorator function can return a target (the class type) and it is even possible to change the props of the class type
 * The decorator function has to be enabled.
 *
 * Decorators can be used for classes, methods, functions or properties
 */

// Adds the property path to a class a sets the value of parameter {path}
const Path = <T>(path: string) => {
  return (target: T) => {
    (target as any).path = path;
  };
};

// Declares the class DecoratorClass and adds the Decorator @Path
@Path("/test")
class DecoratorClass {}

// Declares a function to print a property path of a type if exists
const printPath = <T>(type: new () => T) => {
  if ((type as any).path !== undefined) {
    console.log(`Path of ${type.name} is ${(type as any).path}`);
  }
};

// call function to print the path
printPath(DecoratorClass);
