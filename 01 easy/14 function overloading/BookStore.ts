import "../../ExtensionFunctions";
import { Book } from "./Book";
import { BookStoreInitializer } from "./BookStoreInitializer";
import { IBookFilter } from "./IBookFilter";
import { IBookStore } from "./IBookStore";

/**
 * This class represents a book store
 */
export class BookStore implements IBookStore {
  private books: Book[] = new BookStoreInitializer().initialize();

  // Function overloading:
  // Different to other languages there is only one implementation function in case of overloading them (normally you have one for each)
  // So you have to check which information is provided
  find(): Book[];
  find(isbn: string): Book;
  find(isbn?: any): Book | Book[] {
    if (isbn != null) {
      return this.findByIsbn(isbn);
    }

    return this.books;
  }

  findByBookFilter(bookFilter: IBookFilter): Book[] {
    return [].apply((it) => {
      this.books.forEach((book) => {
        if (
          this.fitsIsbn(bookFilter, book) ||
          this.fitsTitle(bookFilter, book) ||
          this.fitsDescription(bookFilter, book)
        ) {
          it.push(book);
        }
      });
    });
  }

  private findByIsbn(isbn: string): Book | undefined {
    for (let book of this.books) {
      if (book.isbn == isbn) {
        return book;
      }
    }
    return null;
  }

  private fitsIsbn(bookFilter: IBookFilter, book: Book): Boolean {
    return bookFilter.isbn != null && book.isbn == bookFilter.isbn;
  }

  private fitsTitle(bookFilter: IBookFilter, book: Book): Boolean {
    return (
      bookFilter.title != null && book.title.indexOf(bookFilter.title, 0) !== -1
    );
  }

  private fitsDescription(bookFilter: IBookFilter, book: Book): Boolean {
    return (
      bookFilter.description != null &&
      book.description != null &&
      book.description.indexOf(bookFilter.description, 0) !== -1
    );
  }
}
