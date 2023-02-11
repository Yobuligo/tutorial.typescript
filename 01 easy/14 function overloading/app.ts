/**
 * Function Overloading in TypeScript is different to other languages.
 * Instead of having a separate method or function for each variant, in TypeScript there is only one implemented function which handles all cases.
 * To anyway realize overloading function each function signature variant is declared at the above of the implementation function.
 * The signature of the implementation function contains all variants and within the code these variants have to be analyzed.
 *
 * Here is an example for a PersonFinder
 */

interface IPerson {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
}

/**
 * The IPersonFinder contains the method find which has several overloading possibilities.
 */
interface IPersonFinder {
  find(): IPerson[];
  find(id: string): IPerson | undefined;
  find(firstname: string, lastname: string): IPerson | undefined;
  find(age: number): IPerson[];
}

class PersonFinder implements IPersonFinder {
  private persons: IPerson[] = [];

  constructor(...persons: IPerson[]) {
    this.persons = persons;
  }

  /**
   * The following function is the implementation for each overloading function.
   * Therefore all signatures of the overloads are declared at first followed by the function signature that belongs to the implementation and covers all possibilities find(first?: unknown, second?: unknown): IPerson | IPerson[]
   * The implemented function has to analyze the parameter and depending on the constellation the requested result is returned.
   */
  find(): IPerson[];
  find(id: string): IPerson;
  find(firstname: string, lastname: string): IPerson;
  find(age: number): IPerson[];
  find(
    undefinedIdFirstnameOrAge?: unknown,
    undefinedOrLastname?: unknown
  ): IPerson | IPerson[] {
    // find()
    if (
      undefinedIdFirstnameOrAge === undefined &&
      undefinedOrLastname === undefined
    ) {
      return this.persons;
    }

    if (undefinedOrLastname === undefined) {
      // find(id: string)
      if (typeof undefinedIdFirstnameOrAge === "string") {
        return persons.find((person) => {
          return person.id === undefinedIdFirstnameOrAge;
        });
        // find(age: number)
      } else if (typeof undefinedIdFirstnameOrAge === "number") {
        return persons.filter((person) => {
          return person.age === undefinedIdFirstnameOrAge;
        });
      } else {
        throw new Error("Not supported operation");
      }
    }

    // find(firstname: string, lastname: string)
    if (
      typeof undefinedIdFirstnameOrAge === "string" &&
      typeof undefinedOrLastname === "string"
    ) {
      return persons.filter((person) => {
        return (
          person.firstname === undefinedIdFirstnameOrAge &&
          person.lastname === undefinedOrLastname
        );
      });
    }

    throw new Error("Not supported operation");
  }
}

const personFinder: IPersonFinder = new PersonFinder(
  {
    id: "1",
    firstname: "Sherman",
    lastname: "Shark",
    age: 32,
  },
  {
    id: "2",
    firstname: "Simon",
    lastname: "Shark",
    age: 32,
  },
  {
    id: "3",
    firstname: "Sabrina",
    lastname: "Shark",
    age: 34,
  },
  {
    id: "4",
    firstname: "Bertha",
    lastname: "Bear",
    age: 28,
  },
  {
    id: "5",
    firstname: "Stacey",
    lastname: "Starfish",
    age: 22,
  },
  {
    id: "6",
    firstname: "Stacey",
    lastname: "Starfish",
    age: 24,
  }
);

const persons = personFinder.find();
const personById = personFinder.find("4");
const personsByFirstnameAndLastname = personFinder.find("Stacey", "Starfish");
const personsByAge = personFinder.find(32);
console.log(`Test`);
