/**
 * The nullish coalescing operator can be combined with the equal sign to directly reassign the value itself if it is not null or otherwise the fallback value at the right side.
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
