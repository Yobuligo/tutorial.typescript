/**
 * If objects are expensive to be created a lazy load can be used instead
 * The following shows an example as idea how to solve the problem
 */

import { TextPrinter } from "../../01 easy/09 inline interface implementation/TextPrinter";
import { lazy, println } from "../../GlobalFunctions";

class Printer {
  private textPrinter = lazy(() => this.createTextPrinter());

  print(message: string) {
    this.textPrinter.instance.print({
      getText: function (): string {
        return message;
      },
    });
  }

  private createTextPrinter(){
    println("create Instance of text printer.");
    return new TextPrinter()
  }
}

const printer = new Printer();
println("Even so property 'printer' is initialized, the property 'printer.textPrinter' is not initialized");
println("only after the first call of 'printer.print()' it gets initialized");
printer.print("First call of function 'print'");
println("Following another text should be printed by 'printer'. Lazy objects are reused and only initialized once. So it must not be initialized again.");
printer.print("Second call of function 'print'. New instance should be created.");
