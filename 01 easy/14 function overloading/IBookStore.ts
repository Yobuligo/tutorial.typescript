import { Book } from "./Book";
import { IBookFilter } from "./IBookFilter";

/**
 * An instance of that class is responsible for administer books
 * The function 'find' can have three different implementations with different interfaces
 */
export interface IBookStore {
  find(): Book[];
  find(isbn: string): Book;
  findByBookFilter(bookFilter: IBookFilter): Book[];
}
