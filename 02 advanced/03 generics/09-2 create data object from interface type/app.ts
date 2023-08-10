/**
 * Even though it is not possible to create e.g. a service by interface type, as the interface type only exists in TypeScript but not in JavaScript,
 * it is possible to create it, in case all properties of that interface have to be provided and the object to be created is an data object.
 * That might be useful when omitting e.g. a specific property, like id, which must be provided by the class which creates that object.
 */

namespace CreateGenericInstanceFromInterface {
  interface IPerson {
    id: string;
    firstname: string;
    lastname: string;
  }

  class DataObjectFactory {
    create<T>(props: T): T {
      return { ...props };
    }

    createWithOmittedProp<T>(props: Omit<T, "id">): T {
      return { id: Math.random(), ...props } as T;
    }
  }

  const dataObjectFactory = new DataObjectFactory();
  const person = dataObjectFactory.create<IPerson>({
    id: "1",
    firstname: "Stacey",
    lastname: "Starfish",
  });

  console.log(
    `This person is ${person.firstname} ${person.lastname} with id ${person.id}`
  );

  const person2 = dataObjectFactory.createWithOmittedProp<IPerson>({
    firstname: "Stacey",
    lastname: "Starfish",
  });

  console.log(
    `This person is ${person2.firstname} ${person2.lastname} with id ${person2.id}`
  );
}
