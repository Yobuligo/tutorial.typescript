namespace Playground2 {
  interface IPrintable {
    print(): void;
  }

  class Person implements IPrintable {
    private age: number = 28;
    private firstname: string = "Stacey";

    print() {
      console.log(`My name is ${this.firstname} and I am ${this.age} old`);
    }
  }

  class Printer1 {
    constructor(private printFunction: Function) {}

    print() {
      this.printFunction();
    }
  }

  class Printer2 implements IPrintable {
    constructor(private printable: IPrintable) {}

    print() {
      this.printable.print();
    }
  }

  const person = new Person();
  person.print();

  const printer1 = new Printer1(person.print);
  printer1.print();

  const printer2 = new Printer1(() => {
    person.print();
  });
  printer2.print();

  const printer3 = new Printer2(person);
  printer3.print();
}
