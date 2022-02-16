import { Book } from "./Book";

/**
 * An implementation of that interface is responsible for presenting a book with its attributes
 */
export interface IBookPresenter {
  present(book: Book);
}
