/**
 * Indexed properties can be used to get a view to all properties of an object.
 * In addition, it would be possible to map these types to another one.
 * Imagine the following example:
 * We have an entity (a person) and we want to create a table that contains a column for each property.
 * That can be achieved via indexed properties.
 */

namespace IndexedPropertiesToMapTypes {
  // define the entity
  interface IPerson {
    age: number;
    firstname: string;
    lastname: string;
  }

  interface IColumn<T> {
    caption: string;
    name: string;
    value: T;
  }

  // create a new type that maps the props of a type T to a new type AND in addition we even reuse the type of the origin property for the prop value
  // If we would add a ? before the : we even had the possibility to provide a new type who has the same properties, but these properties would be optional.
  type IColumnConfig<T> = { [P in keyof T]?: IColumn<T[P]> };

  // Here we take all properties of a person (age, firstname, lastname) and map it to a new column type.
  const personColumnConfig: IColumnConfig<IPerson> = {
    age: {
      caption: "Age",
      name: "age",
      value: 28,
    },
    firstname: {
      caption: "Firstname",
      name: "firstname",
      value: "Stacey",
    },
  };
}
