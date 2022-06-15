/**
 * Test your code here before moving it into a concrete chapter
 */

import { println } from "./GlobalFunctions";

/**
 * TypeScript to ABAP
 * - Restriction of names (30 characters)
 * - Namespace
 */

interface IMyLogger {
  log(tag: object, text: string)
  log(tag: string, text: string);
}

class MyLogger implements IMyLogger {
  log(tag: object, text: string);
  log(tag: string, text: string);
  log(tag: unknown, text: unknown): any {
    if (typeof(tag) == "object"){
      println(tag.constructor.name)
      // const text = tag as any
      // println(text.name)
    }
    console.log(`${tag}: ${text}`);
  }

  // log(text: string)
  // log(tag: string, text: string): void {
  //   console.log(`${tag}: ${text}`);
  // }
}

class MyTest{
  test(){
    const logger = new MyLogger();
    logger.log(this, "test")
  }
}

const myTest = new MyTest()
myTest.test()