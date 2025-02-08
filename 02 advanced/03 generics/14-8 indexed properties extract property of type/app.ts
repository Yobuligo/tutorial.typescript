/**
 * The following example shows how to extract the properties of a specific type from.
 *
 * Lets assume we have an interface with settings, which can contain of properties of any type.
 * Now we only want to extract the collapse properties. So properties of type boolean.
 */

namespace ExtractPropertyOfType {
  /**
   * Here we define an interface that represents any kind of settings
   */
  interface ISettings {
    collapseProfile: boolean;
    collapsePlaner: boolean;
    numberElements: number;
    filter: string;
  }

  /**
   * This type extracts only the keys of type Boolean
   */
  type ExtractBooleanKeys<T> = {
    [K in keyof T]: T[K] extends boolean ? K : never;
  }[keyof T];

  /**
   * This type picks the boolean properties and creates a new type
   */
  type BooleanKeys<T> = Pick<T, ExtractBooleanKeys<T>>;

  /**
   * This object only contains the boolean keys of ISettings
   */
  const test: BooleanKeys<ISettings> = {
    collapsePlaner: false,
    collapseProfile: true,
  };
}
