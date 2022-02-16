import { println } from "../../GlobalFunctions";
import { Book } from "./Book";
import { IBookPresenter } from "./IBookPresenter";

/**
 * This class represents a BookPresenter
 * It presents books by printing properties at the console
 */
export class BookPresenter implements IBookPresenter {
  present(book: Book) {
    if (book != null) {
      if (book.description != null) {
        println(`'${book.isbn}' '${book.title}' '${book.description}'`);
      } else {
        println(`'${book.isbn}' '${book.title}'`);
      }
    }
  }
}
