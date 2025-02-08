namespace Playground2 {
  class Person {
    firstname = "Stacey";    
    age = 27;
    single = false;
    canDrive = true
  }

  type BooleanKeys<T> = {[K in keyof T]: T[K] extends boolean ? K : never}[keyof T]

  type NewType = Pick<Person, BooleanKeys<Person>>

  const test: NewType = {  }

  class PropPicker <T>{
    constructor(private readonly value: T){}
    
    pick(prop: ){}
  }
}
