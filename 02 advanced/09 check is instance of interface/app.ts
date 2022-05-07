// define a IMeta to provide an interface that contains all meta relevant information
interface IMeta<T> {
  name: string;
  is(object: T): object is T;
}

// define the interface that has to be checked
interface IHaveCaption {
  caption: string;
}

// define a constants with the same name as the interface. Which is possible.
// and declare it has a IMeta for IHaveCaption
// Implement the function is. Which must check the attributes of the object. This is the only way in TypeScript.
// You get the name attribute for free from TypeScript (dont know why).
const IHaveCaption = function () {} as any as IMeta<IHaveCaption>;
IHaveCaption.is = function (object: any): object is IHaveCaption {
  return "caption" in object;
};

class Button implements IHaveCaption {
  constructor(public caption: string) {}
}

// create a button but mark as any. So on the first glance it doesnt not have the attribute caption (only for testing reasons)
const myObject = new Button("Click me") as any;

if (IHaveCaption.is(myObject)) {
  // now we know myObject has a caption and I can access it (thanks to type inference)
  console.log(myObject.caption);
}
