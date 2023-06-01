/**
 * The implementation of an arrow function can be done on three ways:
 * 1. implement the function directly
 * 2. implement the function by calling another function e.g. another arrow function
 * 3. just reference an arrow function.
 *
 * The following examples shows the three different ways taking a button click as example
 *
 * Here a button click is simulated. Just a function which takes another function as parameter which is executed when the click event occurs.
 * 
 * Implementing an arrow function is also called anonymous function, as it has no name or lambda in other languages.
 */
  
const buttonClick = (block: () => void) => {
  block();
};

// 1. implement the event where it occurs
buttonClick(() => {
  console.log("Button was clicked");
});

// 2. call another arrow function where the event occurs
const eventHandler = () => {
  console.log("Button was clicked");
};
buttonClick(() => {
  eventHandler();
});

// 3. The better way to 2. seems to be to just reference the function
buttonClick(eventHandler);
