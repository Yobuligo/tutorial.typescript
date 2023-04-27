/**
 * There is huge difference between the types any and unknown
 * Any means, there is no type check. You can call a method, a function, a property on a variable of type any.
 * Unknown instead means, first you have to check the type, provide the type information, tell the system the type and finally call type safe the required method, function or property
 */

namespace AnyVsUnknown {
  interface IHaveAnyMethod {
    anyMethod(): void;
  }

  const isAnyMethod = (b: any): b is IHaveAnyMethod => {
    return "anyMethod" in b;
  };

  let a: any;
  let b: unknown;

  // I can call a method on a, even so I don't know if a has that method, as it is of type any
  a.anyMethod();

  // But I have to check the type of b, to call a method, as it is of type unknown
  if (isAnyMethod(b)) {
    b.anyMethod();
  }
}
