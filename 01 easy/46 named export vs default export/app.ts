/**
 * There are two types if exports
 *      1. named export
 *      2. default export
 *
 * The default export means to export only one main program construct like a function, constant, class, interface, etc. from a file.
 * It can be achieved by writing "export default <Name>" at the end or probably also at the beginning of a file.
 *
 * The named export means to export several program (or even only one) constructs like functions, constants, classes, interfaces, combinations, etc.
 * It can be achieved by writing the keyword "export" directly in front of the program construct.
 */

/**
 * These are named exports. A file can have 0..n named exports.
 */
export const value = "";
export function testFunction() {}

/**
 * This is an default export, which can be exists only once for a while
 */
class Test {}
export default Test;
