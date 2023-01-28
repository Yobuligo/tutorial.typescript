/**
 * In Kotlin it is possible to have Companion Objects.
 * Instead of having only static methods on a class the companion object provides access to methods of an instance based objects
 * For a class which have a companion object it feels like it provides only access to static methods.
 * But actually it is a specific object.
 * That concept provides the possibility to call a static method of a super class but to get type safe access of objects of the sub class.
 *
 * That is used for example for DataObjects to have find, save, delete methods on the specific DataObject-Class.
 * So there is no need to have access to the DataAccessObjects. Instead the user of a DataObject-Class only has to know that specific class.
 */

type Constructor<T> = { new (): T };

abstract class SuperClass {
  static findById<T>(this: Constructor<T>, id: number): T {
    return;
  }

  static findAll<T>(this: Constructor<T>): T[] {
    return;
  }
}

class SubClass extends SuperClass {
  myAttribute: string = "";
}

// When calling the static method findById as static method on "SubClass" it returns type safe instances of "SubClass"
// even so that static method is implemented on the super class "SuperClass"
const subClass = SubClass.findById(123);
console.log(subClass.myAttribute);
