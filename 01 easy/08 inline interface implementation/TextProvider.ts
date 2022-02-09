import { ITextProvider } from "./ITextProvider";

/**
 * This text provider provides text
 */
export class TextProvider implements ITextProvider {
  getText(): string {
    return "Text provided via separate class implementation";
  }
}
