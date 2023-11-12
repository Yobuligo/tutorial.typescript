/**
 * In the previous chapters we had it about having static methods which can e.g. return type safe properties, even so they are inherited.
 *
 * The next level is to inject only a class type somewhere and to call the static method in a type safe way.
 * Imagine, we can inject somewhere only a class type like "Base" (see example below), we don't have to know the concrete type,
 * but anyway we can call static methods, but in a type safe way, as the method e.g. create is not called for Base but for the inherited class Project (Project.create).
 *
 * The magic is to define a type, which is like a constructor, but it is more, as it also contains static methods, which can be called.
 *
 * Actually it is like having interfaces with static methods.
 */

namespace PolymorphicCallOfStaticMethodForASubclassType {
  abstract class Base {
    /**
     * Static method to create an instance of this subclass
     */
    static create<T>(this: new () => T): T {
      return new this();
    }

    /**
     * Static method to check if the given {@link object} is an instance of this subclass
     */
    static isInstanceOf<T>(this: new () => T, object: object): boolean {
      return object instanceof this;
    }
  }

  class Animal extends Base {
    name = "Dolphin";
  }

  // Animal automatically has the static create method, which creates an instance of the subclass of Dummy, so here Animal
  const animal = Animal.create();
  console.log(animal.name);

  class Project extends Base {
    projectId = 123456789;
  }
  const project = Project.create();

  // even so it is possible to check if another object is of my type
  if (Animal.isInstanceOf(project)) {
    console.log("project is of type animal - must be wrong");
  } else {
    console.log("project isn't of type animal - must be true");
  }

  // An know to the next level, to inject somewhere only the class type of Base and call the STATIC method create
  // This only works, if we define a new type, like normally the constructor. But this type can have more than only the new method for the constructor, but also additional static methods
  type ClassType<T extends Base> = {
    // The already known constructor method
    new (): T;

    // additional static methods, which can be called when using this constructor type
    create<T>(this: new () => T): T;
    isInstanceOf<T>(this: new () => T, object: object): boolean;
  };

  const createInstance = <T extends Base>(type: ClassType<T>): T => {
    return type.create();
  };

  const isInstanceOf = <T extends Base>(type: ClassType<T>, object: object) => {
    return type.isInstanceOf(object);
  };

  const nextAnimal = createInstance(Animal);
  console.log(nextAnimal.name);

  isInstanceOf(Animal, project);
  if (isInstanceOf(Animal, project)) {
    console.log("project is of type animal - must be wrong");
  } else {
    console.log("project isn't of type animal - must be true");
  }
}
