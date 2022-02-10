import { TextPrinter } from "./TextPrinter";
import { TextProvider } from "./TextProvider";

// Print text via ITextProvider by the concrete text provider implementation of 'TextProvider'
new TextPrinter().print(new TextProvider());

// Print text via ITextProvider by an inline text provider
// The text provider default implementation can be added by writing 'new TextPrinter().print({})' putting the cursor between {}
// and use code completion function e.g. Alt+Enter
new TextPrinter().print({
  getText: function (): string {
    return "Text provided via inline class implementation";
  },
});
