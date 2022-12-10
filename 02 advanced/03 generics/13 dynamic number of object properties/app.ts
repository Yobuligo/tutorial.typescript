import { IPerson } from "../../../01 easy/19 cast/app";
/**
 * In TypeScript it is possible to declare objects which have a dynamic number of properties.
 * This provides the possibility to e.g. add various properties or even methods to an object
 */

// Here an object is declared with 2 methods.
// the property name is given followed by colon (':') and the method or the property value.
// it is even possible to omit the ':' like for method 'method2'. So it looks like a function is directly declared. Anyway the corresponding property would have the name of the function, like in that example 'method2'.
const variousNumbers = {
  method: () => {},
  methods2() {},
  prop: "Stacey",
};

variousNumbers.method();
variousNumbers.methods2();

// But how does the definition of that type looks like? How to define a type which can take several methods, with e.g. a specific parameter?
// Here a type or more specific an interface is defined which can have various properties. The properties are represented by 'k' the key of type string. k would be the method or property name.
// In addition each property must be of type of a function which requires one importing parameter 'parameter'.
interface IDynamicMethods<T> {
  [k: string]: (parameter: T) => void;
}

const dynamicMethods: IDynamicMethods<IPerson> = {
  first: (parameter) => {
    console.log(
      `I can access type safe the property firstname of the parameter object by ${parameter.firstname}`
    );
  },
  second(parameter) {
    console.log(`I can add as many methods as desired`);
  },
};

// And what is it good for? E.g. I can use that dynamically added methods and call them directly instead of having e.g. an enumeration which needs to be analyzed in a switch statement. So it could be used to trigger an event
dynamicMethods.first({ firstname: "Stacey", lastname: "Starfish" });

// Within a framework it would be possible to call the methods dynamically. Here each method would be called automatically and I can hand over type safe an object 'person' which is required for each method.
for (let propName in dynamicMethods) {
  const person: IPerson = { firstname: "Stacey", lastname: "Starfish" };
  const prop = dynamicMethods[propName];
  prop(person);
}
