import { println } from "../../../GlobalFunctions";

/**
 * Even so having a ICloneable interface etc. is nice and type safe.
 * The easiest way is to use the internal clone function of TypeScript {... new Teacher() }
 * The greatest disadvantage probably is that I have no control over what must be cloned.
 */
namespace GenericCloneableShort {
  let index = 0;

  class TestDefault {
    index: number;

    constructor() {
      index++;
      this.index = index;
    }
  }

  const Test = new TestDefault();

  class Person {
    firstname = "Stacey";
  }

  class Teacher extends Person {
    constructorTest: TestDefault;
    refTest = Test;
    subject = "Math";

    constructor() {
      super();
      this.constructorTest = new TestDefault();
    }
  }

  const clone = { ...new Teacher() };
  println(
    `Clone is ${clone.firstname} with subject ${clone.subject}, with constructor test ${clone.constructorTest.index}, with ref test ${clone.refTest.index}`
  );
  const clone2 = { ...new Teacher() };
  println(
    `Clone is ${clone2.firstname} with subject ${clone2.subject}, with constructor test ${clone2.constructorTest.index}, with ref test ${clone.refTest.index}`
  );
}
