import { Book } from "./Book";

/**
 * An implementation if that interface is responsible for initializing a list of books
 */
export interface IBookStoreInitializer {
  initialize(): Book[];
}
