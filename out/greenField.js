/**
 * Test your code here before moving it in a concrete chapter
 */
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.selectProperty = function (object, selector) {
        return selector(object);
    };
    return Test;
}());
var Person = /** @class */ (function () {
    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    return Person;
}());
var test = new Test();
var person = new Person("Stacey", "Starfish", 30);
var age = test.selectProperty(person, function (person) {
    return person.age;
});
//# sourceMappingURL=greenField.js.map