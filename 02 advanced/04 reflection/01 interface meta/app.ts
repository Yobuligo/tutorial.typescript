import { println } from "../../../GlobalFunctions";

// Meta definition which should provide reflection info of [T]
export interface IMeta<T> {
  name: string;
  is(object: any): object is T;
}

// Any interface definition
export interface IHaveId {
  id: string;
}

// Meta definition specific for [IHaveId].
// Instead of a class a const is used for providing reflection info,
// which could even have the same name like the interface
// name: the name is provided by default from typescript
// is: additional methods can be assigned by a static function implementation
export const IHaveId = function () {} as any as IMeta<IHaveId>;
IHaveId.is = function (object: any): object is IHaveId {
  return "id" in object;
};

// Usage
class Test implements IHaveId {
  id: string = "12";
}
println(IHaveId.name);
println(IHaveId.is(new Test()));
