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

  registerOnUpdate<K extends keyof T>(
    prop: K,
    eventHandler: (prop: K, value: T[K]) => void
  ) {
    eventHandler(prop, this.object[prop]);
  }
}

const book = new Book();
const propertyUpdater = new PropertyUpdater(book);
propertyUpdater.update("isbn", "My ISBN"); // only strings are allowed for property isbn
propertyUpdater.update("publishedAt", new Date()); // only Dates are allowed
propertyUpdater.update("numberSoldBooks", 123); // only numbers are allowed
propertyUpdater.registerOnUpdate("publishedAt", (prop, value) => {}); // You can see that "prop" is "publishedAt" and value is type Date. Access value type safe.
