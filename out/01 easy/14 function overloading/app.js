/**
 * Function Overloading in TypeScript is different to other languages.
 * Instead of having a separate method or function for each variant, in TypeScript there is only one implemented function which handles all cases.
 * To anyway realize overloading function each function signature variant is declared at the above of the implementation function.
 * The signature of the implementation function contains all variants and within the code these variants have to be analyzed.
 *
 * Here is an example for a PersonFinder
 */
class PersonFinder {
    constructor(...persons) {
        this.persons = [];
        this.persons = persons;
    }
    find(undefinedIdFirstnameOrAge, undefinedOrLastname) {
        // find()
        if (undefinedIdFirstnameOrAge === undefined &&
            undefinedOrLastname === undefined) {
            return this.persons;
        }
        if (undefinedOrLastname === undefined) {
            // find(id: string)
            if (typeof undefinedIdFirstnameOrAge === "string") {
                return persons.find((person) => {
                    return person.id === undefinedIdFirstnameOrAge;
                });
                // find(age: number)
            }
            else if (typeof undefinedIdFirstnameOrAge === "number") {
                return persons.filter((person) => {
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
            return persons.filter((person) => {
                return (person.firstname === undefinedIdFirstnameOrAge &&
                    person.lastname === undefinedOrLastname);
            });
        }
        throw new Error("Not supported operation");
    }
}
const personFinder = new PersonFinder({
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
const persons = personFinder.find();
const personById = personFinder.find("4");
const personsByFirstnameAndLastname = personFinder.find("Stacey", "Starfish");
const personsByAge = personFinder.find(32);
console.log(`Test`);
//# sourceMappingURL=app.js.map