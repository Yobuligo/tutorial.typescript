namespace Playground2 {
  class Person {
    firstname = "Stacey";    
    age = 27;
    single = false;
    canDrive = true
  }

  type BooleanKeys<T> = {[K in keyof T]: T[K] extends boolean ? K : never}[keyof T]
}
