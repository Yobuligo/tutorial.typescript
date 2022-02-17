import { Lazy } from "./GlobalClasses";

/**
 * This function is responsible for wrapping the function console.log.
 */
export function println(...data: any[]): void {
  console.log(...data);
}

/**
 * This function is responsible for creating a new line at the console
 */
export function newLine() {
  println("");
}

/**
 * This function is responsible for raising a TODO exception
 */
export function TODO(message: string = "Not implemented exception") {
  throw new Error(message);
}

/**
 * This function is responsible for creating a lazy instance
 */
export function lazy<T>(instanceInitializer: () => T): Lazy<T> {
  return new Lazy<T>(instanceInitializer);
}
