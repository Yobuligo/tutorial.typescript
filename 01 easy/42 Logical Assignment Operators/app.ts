/**
 * Logical Assignment Operators are operators which check a condition and depending on the result a value is assigned.
 * Here we have:
 * - nullish coalescing assignment
 * - and assignment
 * - or assignment
 *
 * For more details see the concretes examples in the lessons below (within the explorer). Below there are only small examples
 */

namespace LogicalAssignmentOperator {
  // Trim values, if value is truthy
  let firstname = "Stacey";
  firstname &&= firstname.trim();

  // Initialize value, if value is falsy
  let lastname = "";
  lastname ||= "Starfish";

  // Provide alternative value, if value is null or undefined
  let person: { firstname: string } | undefined = undefined;
  person ??= { firstname: "Alex" };
}
