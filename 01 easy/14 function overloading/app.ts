import { newLine, println } from "../../GlobalFunctions";
import { BookFilter } from "./BookFilter";
import { BookPresenter } from "./BookPresenter";
import { BookStore } from "./BookStore";

// !!! Function overloading in 'BookStore.ts'

const bookStore = new BookStore();
const bookPresenter = new BookPresenter();

// find all
println("find all");
bookStore.find().forEach((book) => bookPresenter.present(book));
newLine();

// find by a given id
println("find by ISBN");
bookPresenter.present(bookStore.find("148427010X"));
newLine();

// find via 'IBookFilter'
println("find by filter");
bookStore
  .findByBookFilter(new BookFilter(null, `Improve`))
  .forEach((book) => bookPresenter.present(book));
