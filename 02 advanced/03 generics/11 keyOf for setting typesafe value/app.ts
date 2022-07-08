/**
 * The following code shows how to use keyOf to set a property of an object generic and type safe
 */

class Book {
  isbn: string;
  publishedAt: Date;
  numberSoldBooks: number;
}

class PropertyUpdater<T> {
  constructor(private object: T) {}

  update<K extends keyof T>(prop: K, value: T[K]) {
    this.object[prop] = value;
  }
}

const book = new Book();
const propertyUpdater = new PropertyUpdater(book);
propertyUpdater.update("isbn", "My ISBN"); // only strings are allowed for property isbn
propertyUpdater.update("publishedAt", new Date()); // only Dates are allowed
propertyUpdater.update("numberSoldBooks", 123); // only numbers are allowed
