/**
 * Try to avoid else in conditions.
 *
 */

namespace AvoidElse {
  interface IPerson {
    age?: number;
  }

  function canDrink(person: IPerson) {
    if (person.age !== undefined) {
      if (person.age < 18) {
        console.log("Nope");
      } else if (person.age < 21) {
        console.log("Not in the US");
      } else {
        console.log("yes");
      }
    } else {
      console.log("You are not a person");
    }
  }

  function canDrinkImproved(person: IPerson) {
    console.log(response(person));
  }

  function response(person: IPerson): string {
    if (person.age === undefined) return "Not a person";
    if (person.age < 18) return "Nope";
    if (person.age < 21) return "Not in the US";
    return "Yes";
  }
}
