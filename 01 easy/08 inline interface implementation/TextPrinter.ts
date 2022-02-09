import { println } from "../../GlobalFunctions";
import { ITextProvider } from "./ITextProvider";

/**
 * The text printer is responsible for printing text.
 * The text is given by 'ITextProvider'
 */
export class TextPrinter {
  print(textProvider: ITextProvider) {
    println(textProvider.getText());
  }
}
