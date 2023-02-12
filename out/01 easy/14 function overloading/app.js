/**
 * Function Overloading in TypeScript is different to other languages.
 * Instead of having a separate method or function for each variant, in TypeScript there is only one implemented function which handles all cases.
 * To anyway realize overloading function each function signature variant is declared at the above of the implementation function.
 * The signature of the implementation function contains all variants and within the code these variants have to be analyzed.
 *
 * Here is an example for a PersonFinder
 */
var PersonFinder = /** @class */ (function () {
    function PersonFinder() {
        var persons = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            persons[_i] = arguments[_i];
        }
        this.persons = [];
        this.persons = persons;
    }
    PersonFinder.prototype.find = function (undefinedIdFirstnameOrAge, undefinedOrLastname) {
        // find()
        if (undefinedIdFirstnameOrAge === undefined &&
            undefinedOrLastname === undefined) {
            return this.persons;
        }
        if (undefinedOrLastname === undefined) {
            // find(id: string)
            if (typeof undefinedIdFirstnameOrAge === "string") {
                return persons.find(function (person) {
                    return person.id === undefinedIdFirstnameOrAge;
                });
                // find(age: number)
            }
            else if (typeof undefinedIdFirstnameOrAge === "number") {
                return persons.filter(function (person) {
                    return person.age === undefinedIdFirstnameOrAge;
                });
            }
            else {
                throw new Error("Not supported operation");
            }
        }
        // find(firstname: string, lastname: string)
        if (typeof undefinedIdFirstnameOrAge === "string" &&
            typeof undefinedOrLastname === "string") {
            return persons.filter(function (person) {
                return (person.firstname === undefinedIdFirstnameOrAge &&
                    person.lastname === undefinedOrLastname);
            });
        }
        throw new Error("Not supported operation");
    };
    return PersonFinder;
}());
var personFinder = new PersonFinder({
    id: "1",
    firstname: "Sherman",
    lastname: "Shark",
    age: 32,
}, {
    id: "2",
    firstname: "Simon",
    lastname: "Shark",
    age: 32,
}, {
    id: "3",
    firstname: "Sabrina",
    lastname: "Shark",
    age: 34,
}, {
    id: "4",
    firstname: "Bertha",
    lastname: "Bear",
    age: 28,
}, {
    id: "5",
    firstname: "Stacey",
    lastname: "Starfish",
    age: 22,
}, {
    id: "6",
    firstname: "Stacey",
    lastname: "Starfish",
    age: 24,
});
var persons = personFinder.find();
var personById = personFinder.find("4");
var personsByFirstnameAndLastname = personFinder.find("Stacey", "Starfish");
var personsByAge = personFinder.find(32);
console.log("Test");
//# sourceMappingURL=app.js.map