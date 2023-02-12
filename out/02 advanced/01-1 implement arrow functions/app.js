// The implementation of an arrow function can be done on three ways:
// 1. implement the function directly
// 2. implement the function by calling another function e.g. another arrow function
// 3. just reference an arrow function.
//
// The following examples shows the three different ways taking a button click as example
// Here a button click is simulated. Just a function which takes another function as parameter which is executed when the click event occurs.
var buttonClick = function (block) {
    block();
};
// 1. implement the event where it occurs
buttonClick(function () {
    console.log("Button was clicked");
});
// 2. call another arrow function where the event occurs
var eventHandler = function () {
    console.log("Button was clicked");
};
buttonClick(function () {
    eventHandler();
});
// 3. The better way to 2. seems to be to just reference the function
buttonClick(eventHandler);
//# sourceMappingURL=app.js.map