import { TextPrinter } from "../../../01 easy/09 inline interface implementation/TextPrinter";

/**
 * This class is responsible for administer 3 different values (first, second, third).
 * By generics the type of each type is defined
 */
class Triple<A, B, C> {
  constructor(public first: A, public second: B, public third: C) {}
}

const triple = new Triple("string", 123, new TextPrinter());

// Type safe access to property 'third'. It is known that it is a TextPrinter
triple.third.print({
  getText: function (): string {
    return "Type safe property access";
  },
});
