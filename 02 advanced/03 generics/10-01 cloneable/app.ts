/**
 * There following example shows how an implementation of cloneable can looks like
 */

import { println } from "../../../GlobalFunctions";

namespace Cloneable {
  /**
   * The method clone returns this, which is the type of the current implementation.
   */
  interface ICloneable {
    clone(): this;
  }

  abstract class Human implements ICloneable {
    abstract clone(): this;
  }

  class Teacher extends Human {
    constructor(public firstname: string) {
      super();
    }

    clone(): this {
      return new Teacher(this.firstname) as this;
    }
  }

  class Worker extends Human {
    constructor(public lastname: string) {
      super();
    }

    clone(): this {
      return new Worker(this.lastname) as this;
    }
  }

  const teacher = new Teacher("Stacey");
  println(teacher.clone().firstname);

  const worker = new Worker("Starfish");
  println(worker.clone().lastname);
}
