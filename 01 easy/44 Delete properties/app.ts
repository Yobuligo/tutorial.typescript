/**
 * In TypeScript it is even possible to delete a property.
 * The prerequisite is that the property is an optional property.
 */

namespace DeleteProperties {
  const person: { firstname: string; lastname?: string } = {
    firstname: "Stacey",
    lastname: "Starfish",
  };

  delete person.lastname;
}
