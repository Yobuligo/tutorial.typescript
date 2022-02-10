// creates a list of string elements and sets values
var numbers = ["one", "two", "three"];
// list entries "one", "two", "three" (keyword OF)
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    console.log(i);
}
// lists index 1, 2, 3 of 'numbers' (keyword IN)
for (var i in numbers) {
    console.log(i);
}
// list entries "one", "two", "three"
numbers.forEach(function (entry) {
    console.log(entry);
});
//# sourceMappingURL=app.js.map