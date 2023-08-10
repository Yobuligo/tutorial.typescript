namespace GenericCloneableTypeSafeShort {
  interface ICloneable {
    clone(): this;
  }
  class Human implements ICloneable {
    name: string = "Stacey";
    age: number = 28;
    // clone(): this {
    //   return new (this as any).constructor();
    // }

    // even better, as directly the properties are cloned
    clone(): this {
      return { ...this };
    }
  }
  class Teacher extends Human {
    subject = "Math";
  }
  class Developer extends Human {
    skill = "TypeScript";
  }
  const human = new Human();
  console.log(human.clone().name);
  const teacher = new Teacher();
  console.log(teacher.clone().subject);
  const developer = new Developer();
  console.log(developer.clone().skill);
}
