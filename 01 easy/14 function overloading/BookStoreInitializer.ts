import { Book } from "./Book";
import { IBookStoreInitializer } from "./IBookStoreInitializer";

/**
 * This class represents a book store initializer.
 */
export class BookStoreInitializer implements IBookStoreInitializer {
  initialize(): Book[] {
    const books: Book[] = [];

    books.push(
      new Book(
        "1492037656",
        "Programming TypeScript: Making Your JavaScript Applications Scale"
      )
    );
    books.push(
      new Book(
        "1492053740",
        "Effective TypeScript: 62 Specific Ways to Improve Your TypeScript",
        "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript."
      )
    );
    books.push(
      new Book("148427010X", "Essential TypeScript 4: From Beginner to Pro")
    );
    return books;
  }
}
