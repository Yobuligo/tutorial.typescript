import { IBookFilter } from "./IBookFilter";

/**
 * This class represents a book filter 
 */
export class BookFilter implements IBookFilter {
  constructor(
    public isbn?: string,
    public title?: string,
    public description?: string
  ) {}
}
