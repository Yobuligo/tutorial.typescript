// the extension function must be imported manually
import "./BooleanExtension";
import "./StringExtension";

// Declare Boolean variable, initialize it with false and call extension function ifFalse
const falseValue = false;
falseValue.ifFalse(() => console.log("I am false"));

// Declare Boolean variable, initialize it with true and call extension function ifTrue
const trueValue = true;
trueValue.ifTrue(() => console.log("I am true"));

// Declare String variable, initialize it by setting a text and call extension function ifNotEmpty
const text = "Here is my Text";
text.ifNotEmpty((value) => {
  // The following code is executed if 'text' is not empty. Value is the 'text' object itself.
  console.log(`Value is my text object and it is filled with ${value}`);
});

// Declare String variable, initialize it by setting space as text and call extension function ifNotEmpty
const emptyText = "";
text.ifNotEmpty((value) => {
  console.log(`This code will never be executed as ${emptyText} is space.`);
});
