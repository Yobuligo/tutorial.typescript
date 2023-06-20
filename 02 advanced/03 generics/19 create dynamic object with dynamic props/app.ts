/**
 * Imagine you want to create a dynamic object.
 * An object that contains of properties, which are defined in some meta data or which are provided from another object.
 * That is possible by creating a dynamic object.
 *
 * The following example shows how to convert normal properties to properties which starts with --.
 * This can be used e.g. for creating React variables.
 */

namespace CreateDynamicObject {
  /**
   * Here is an interface with colors defined
   */
  interface IColor {
    backgroundColor: string;
    color: string;
  }

  /**
   * This object should be converted to an object, which contains of properties which starts with --.
   */
  const toCSSColor = (color: IColor) => {
    const object: any = {};
    for (let propName in color) {
      object[`--${propName}`] = (color as any)[propName];
    }
    return object;
  };
}
