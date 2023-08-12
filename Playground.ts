namespace Playground {
  class ValueContainer<T> {
    constructor(readonly value: T) {}
  }

  interface IPerson {
    firstname: string;
    age: number;
  }

  const valueContainer = new ValueContainer<IPerson>({
    age: 28,
    firstname: "Stacey",
  });

  debugger;
}
