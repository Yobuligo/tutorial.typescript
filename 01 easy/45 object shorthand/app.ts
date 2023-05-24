/**
 * The injection of variables to new objects can be shorten by skipping the target variable name, in case the name is the same
 */

namespace ObjectShorthand {
  interface IPerson {
    name: string;
  }

  // before
  const name = "Stacey";
  const person: IPerson = { name: name };

  // after
  const person2: IPerson = { name };
}
