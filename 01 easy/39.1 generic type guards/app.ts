/**
 * Here is an example how to provide a generic type guard function, that can be used for several purposes.
 */

namespace GenericTypeGuard {
  /**
   * Provide a generic function that can be used for all type guard functions
   */
  const is = <T extends object>(check: (instance: object) => boolean) => {
    return (instance: object): instance is T => {
      return check(instance);
    };
  };

  interface INote {
    id: number;
    text: string;
  }

  /**
   * Here is the previous code for the type guard function
   */
  const isNoteOld = (instance: object): instance is INote => {
    return "text" in instance;
  };

  /**
   * Here is a shorter version of the type guard function
   * It would be easier to find all type guard functions
   * There is no need to known how the "instance is Type" concept
   */
  const isNote = is<INote>((instance) => "text" in instance);

  /**
   * I can access the properties of isNote
   */
  const anyObject: any = {};
  if (isNote(anyObject)) {
    anyObject.text;
  }
}
