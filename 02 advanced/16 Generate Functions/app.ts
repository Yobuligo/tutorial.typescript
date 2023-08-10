/**
 * Generate functions are a specific type of functions.
 * Instead of running the whole code of a function with each call, the function stops at a specific point defined by the keyword "yield".
 * With the next call the execution of the functions continues afterwards and stops at the next yield and so on.
 * "yield" is some kind of "return". It returns a value and it returns a property "done". If it is true you know the execution is finished.
 * Generator Functions also have a * after the keyword function
 *
 * The concept can be used e.g. for generator functions, which provide ids
 * 
 * I checked it out. To generate an Id with the generation function seems to need 3x more time than using an IdGenerator class
 * class IdGenerator{
 *    private cursor = 0
 * 
 *    next(){
 *      cursor++
 *      return cursor
 *    }
 * }
 */

namespace GeneratorFunctions {
  function* idGenerator() {
    let i = 0;
    while (true) {
      yield i;
      i++;
    }
  }

  // here we generate 3 ids
  const first = idGenerator();
  const second = idGenerator();
  const third = idGenerator();
}
