"use strict";
/**
 * The following code shows how to ensure that an object has a specific property
 */
/**
 * The following function returns a property of an object by the properties key
 * Therefor
 * 1. T must be of type of an object (so extends object) but no literal (like string or number), as only objects can have properties.
 *    Otherwise I would be able to return a property of an object
 * 2. the property key [K] must be part of the object. This can be checked by K extends KEYOF T
 */
function getProperty(object, key) {
    return object[key];
}
//# sourceMappingURL=app.js.map