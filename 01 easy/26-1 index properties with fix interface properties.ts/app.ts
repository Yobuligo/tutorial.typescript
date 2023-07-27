/**
 * The previous example shows that it is possible to define an interface with a variable amount of properties.
 * But in some cases I want to have a property with properties, which should have all the same type, but I want to know these types.
 * This can be solved by using index properties for types and interfaces which are extended by that type.
 * 
 * Belongs to "Index Properties / index property / index properties / Indexable type" (see advanced)
 */

namespace IndexedPropertiesWithFixInterfaceProps {
  /**
   * First define that indexed type
   */
  type Colors = { [name: string]: string };

  /**
   * Second create an interface that extends the indexed type.
   * Now all properties of that interface must be of type of the indexed type.
   */
  interface IColors extends Colors {
    backgroundColor: string;
    buttonColor: string;
    color: string;
    inputColor: string;
  }
}
