/**
 * A decorator can be considered like annotations in Kotlin but less powerful.
 * A decorator is a function that is called and which can have parameters.
 * The decorator function can return a target (the class type) and it is even possible to change the props of the class type
 * The decorator function has to be enabled.
 *
 * Decorators can be used for classes, methods, functions, properties or parameters
 */

import { println } from "../../GlobalFunctions";

// Adds the property path to a class a sets the value of parameter {path}
const Path = <T>(path: string) => {
  return (target: T) => {
    (target as any).path = path;
  };
};

/**
 * Property Decorator - simple
 */
const Prop = (target: any, name: string) => {
  console.log(target);
  console.log(name);
};

/**
 * Use Property Decorator for validation
 */
const Min = (minValue: 10) => {
  return (target: any, propertyKey: string)=>{
    let value = target[propertyKey];

    const setter = function (newValue: any) {
      if (newValue < minValue) {
        throw new Error(`Property value must be not smaller than ${minValue}`);
      }
      value = newValue;
    };
  
    const getter = function () {
      return value;
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  }
};

/**
 * Method Decorator
 */
const Method = (target: any, name: string) => {
  console.log(target);
  console.log(name);
};

/**
 * Parameter Decorator
 */
const Param = (target: any, name: string, parameterIndex: number) => {};

// Declares the class DecoratorClass and adds the Decorator @Path
@Path("/test")
class DecoratorClass {
  @Prop
  simple = "Test";
  @Min(10)
  myProperty: number = 100;

  @Method
  test(): void {
    println("Test");
  }

  test2(@Param param: string): void {
    println(`${param}`);
  }
}

// Declares a function to print a property path of a type if exists
const printPath = <T>(type: new () => T) => {
  if ((type as any).path !== undefined) {
    console.log(`Path of ${type.name} is ${(type as any).path}`);
  }
};

// call function to print the path
printPath(DecoratorClass);

const test = new DecoratorClass();
test.myProperty = 20;
test.myProperty = 9;

