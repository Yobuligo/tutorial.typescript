/**
 * Partial is a specific "Utility Type". It can be used to define a variable that must only contain of parts of a given type.
 * At the end it takes a type T and returns another type with the same shape as T but with all fields set to optional.
 */
/**
 * The following code wouldn't work, as the properties of [ICourse] are not initialized
 */
//const myCourse: ICourse = {}
/**
 * By using Partial it would work. Or properties are considered as optional. And you only have access to the properties of [ICourse].
 */
var myCourse = {};
//# sourceMappingURL=app.js.map