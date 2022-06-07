/**
 * Partial is a specific type. It can be used to define a variable that must only contain of parts of a given type.
 */

interface ICourse {
  name: string;
  title: string;
  description: string;
  date: Date;
}

/**
 * The following code wouldn't work, as the properties of [ICourse] are not initialized
 */
//const myCourse: ICourse = {}

/**
 * By using Partial it would work. Or properties are considered as optional. And you only have access to the properties of [ICourse].
 */
const myCourse: Partial<ICourse> = {};