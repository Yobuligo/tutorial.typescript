type Constructor2<T> = new () => T;

abstract class DataObject {
  static first<T>(this: Constructor2<T>): T {
    return;
  }

  static save<T>(this: Constructor2<T>): T {
    return;
  }
}

class Animal extends DataObject {
  name: string = "";
  age: number = 123;
}

const animal = Animal.first();
