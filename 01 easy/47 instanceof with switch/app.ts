/**
 * Sometimes I want to compare an object instance against a class type via switch instead of if.
 * Here I can take the constructor of an object.
 */
namespace InstanceOfClassType {
  class Firstname {
    firstname: string = "";
  }

  class Lastname {
    lastname: string = "";
  }

  const object = new Firstname();

  switch (object.constructor) {
    case Firstname: {
      console.log(`Object is of type Firstname`);
      break;
    }
    case Lastname: {
      console.log(`Object is of type Lastname`);
      break;
    }
  }
}
