// Subscribe / Unsubscribe

type Handler = () => void;

namespace Subscribe {
  class Button {
    private handlers: Handler[] = [];

    add(handler: Handler): Handler {
      this.registerHandler(handler);
      return () => {
        this.unregisterHandler(handler);
      };
    }

    click() {
      this.handlers.forEach((handler) => handler());
    }

    private unregisterHandler(handler: Handler) {
      this.handlers.splice(
        this.handlers.findIndex((observer) => observer === handler),
        1
      );
    }

    private registerHandler(handler: Handler) {
      this.handlers.push(handler);
    }
  }

  const button = new Button();
  const unsubscribe = button.add(() => console.log("Button was clicked "));
  button.click();
  button.click();

  unsubscribe();
  button.click();
}

function repeatFunction(times: number) {
  for (let i = 0; i < times; i++) {
    console.log("Test");
  }
}

const repeatAsArrowFunction = (times: number) => {
  for (let i = 0; i < times; i++) {
    console.log("Test");
  }
};

const repeatAsHigherOrderFunction = (
  times: number,
  block: (index: number) => string
) => {
  for (let i = 0; i < times; i++) {
    const result = block(i);
    console.log(result);
  }
};

repeatAsHigherOrderFunction(5, (index) => {
  console.log(index);
  return index.toString();
});

namespace Workshop {
  console.log("Hello World");

  const constants: string = "My constants";
  let variable: string;

  const string: string = "My String";
  const character: string = "C";
  const integer: number = 123;
  const decimal: number = 1.23;
  const boolean: boolean = true;

  // Tuples
  // type Person = [firstname: string, lastname: string, age: number];
  // const person: Person = ["John", "Smith", 28];

  // Internal Tables / Arrays
  // const persons: Person[] = [];
  // persons.push(person);

  /**
   * Class Definition
   */
  // class Person {}

  // const person = new Person();

  /**
   * Class with constructor and properties
   */

  // class Person {
  //   public readonly fullName: string;

  //   constructor(readonly firstname: string, readonly lastname: string) {
  //     this.fullName = firstname + lastname;
  //   }
  // }

  // const person: Person = new Person("John", "Smith");

  /**
   * Class with methods
   */
  // class Person {
  //   public readonly fullName: string;
  //   public readonly age: number;

  //   constructor(
  //     readonly firstname: string,
  //     readonly lastname: string,
  //     age: number
  //   ) {
  //     this.fullName = firstname + " " + lastname;
  //     this.age = age;
  //   }
  // }

  // const person: Person = new Person("John", "Smith", 32);
  // console.log(person.firstname);
  // console.log(person.lastname);
  // console.log(person.fullName);
  //   // console.log(person.age);

  //   interface IPerson {
  //     getFirstname(): string;
  //   }

  //   class Person implements IPerson {
  //     getFirstname(): string {
  //       return "John";
  //     }
  //   }

  //   const person = new Person();
  //   const firstname = person.getFirstname();

  // const status: string = "OPEN";

  // switch (status) {
  //   case "OPEN": {
  //     console.log("Open");
  //     break;
  //   }
  //   case "CLOSED": {
  //     console.log("Closed");
  //     break;
  //   }
  //   default: {
  //     console.log("Unknown");
  //   }
  // }

  // class Person {
  //   print() {
  //     console.log("I am John Smith");
  //   }
  // }

  // class Teacher extends Person {
  //   private skill: string = "";
  // }

  // function get(): Person {
  //   return new Teacher();
  // }

  // const person: Person = new Teacher();
  // const teacher: Teacher = person as Teacher;

  // Class with constructor and properties
  // Class with methods
  // Class with inheritance
  // Cast
  // Interface Definition
  // Case-when / Switch-case
  // If-condition

const firstname = "John";
const lastname = "Smith";
console.log(`Hello, my name is ${firstname} ${lastname}`);
}
