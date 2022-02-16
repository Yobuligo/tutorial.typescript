import { newLine, println } from "../../GlobalFunctions";

/**
 * This class is responsible for keeping attributes of a person and printing them
 */
class Person {
  // define optional property 'nickname'
  nickname?: string;

  // define constructor with optional parameter 'nickname'
  constructor(
    public firstname: string,
    public lastname: string,
    nickname?: string
  ) {
    this.nickname = nickname;
  }
}

/**
 * This class is responsible for printing attributes of a person
 */
class PersonPrinter {
  print(person: Person) {
    println(`Hello my name is ${person.firstname} ${person.lastname}.`);

    // Check if the optional property 'nickname' was set
    if (person.nickname != null) {
      println(`My nickname is ${person.nickname}`);
    }
  }
}

new PersonPrinter().print(new Person("Stacey", "Starfish"));
newLine();
new PersonPrinter().print(new Person("Stacey", "Starfish", "Fishy"));
