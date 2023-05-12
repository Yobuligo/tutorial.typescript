/**
 * The nullish coalescing operator can be combined with the equal sign to directly reassign the value itself if it is not null or otherwise the fallback value at the right side.
 * 
 * The nullish coalescing operator is pretty similar to the Logical OR Assignment operator ||=, the difference is that the nullish coalescing operator will check the value on the left side only against null or undefined.
 * On the other hand the Logical OR Assignment operator checks against all falsy values, which includes 0 or an empty string "".
 */

namespace NullishCoalescingAssignment {
  interface IPerson {
    firstname: string;
  }

  const getPerson = (yesOrNo: boolean): IPerson | undefined => {
    if (yesOrNo) {
      return { firstname: "Stacey" };
    }
    return undefined;
  };

  // The following code would return a person, so in that case the person.firstname would be "Stacey"
  let person = getPerson(true);
  person ??= { firstname: "Alex" };

  // And here the function getPerson wouldn't return a person, so when reassigning the value to person person would be the new instance with firstname "Alex"
  person = getPerson(false);
  person ??= { firstname: "Alex" };
}
