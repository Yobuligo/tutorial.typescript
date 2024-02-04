/**
 * Here is an regex example for finding placeholders
 */

namespace RegexPlaceholderStartingWithEndingWith {
  const text = "text {{first}} with some more {{first}} and {{second}}";

  // Splits the text at {{<expression>}} and contains the brackets.
  // The result would be a list with ['text ', '{{first}}', ' with some more ', '{{first}}', ' and ', '{{second}}', '']
  const texts = text.split(/({{.*?}})/);
  console.log(texts);
}
