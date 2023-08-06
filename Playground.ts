namespace Playground {
  /**
   * Interface wird implementiert, das ein CompanionObject sein muss. Alle Methoden des Interfaces erweitern diese Klasse, die es implementiert.
   *    Da Interfacemethoden immer instanzbasiert sind, funktioniert das schon einmal nicht
   * und die hinzugefügten Methoden müssen statische Methoden sein
   *    Wie kann ich einer Klasse statische Methoden hinzufügen, ohne das ich erbe?
   * Ich möchte meine Vererbung dafür nicht aufgeben
   * Aber statt das die Klasse sie selbst implementiert, stammen die Methoden von einem CompanionObject
   */

  // Mixin-Funktion, um statische Methode hinzuzufügen

  class Creature {
    kind = "";
    constructor(public color: string) {}
  }

  type Constructor = new (...args: any[]) => {};

  function Companion<T extends Constructor>(Base: T) {
    return class Entity extends Base {
      static data: any[] = [];

      constructor(...args: any[]) {
        super(args);
      }

      static add<T>(this: new (...args: any[]) => T, entity: T): T {
        Entity.data.push(entity);
        return entity;
      }

      static findAll<T>(this: new (...args: any[]) => T): T[] {
        return Entity.data;
      }
    };
  }

  class Lion extends Companion(Creature) {
    name: string = "Stacey";
    age: number = 123;
  }

  class Cat extends Companion(Creature) {
    name: string = "Stacey";
    age: number = 123;
    house = "Eppelheim";
  }

  const animal = new Lion("");
  Lion.add(new Lion(""));
  // Lion.add(new Lion());
  // Cat.add(new Cat());
  // Cat.add(new Cat());
  // Cat.add(new Cat());

  const lions = Lion.findAll();

  // class MyClass extends Companion(Animal) {}

  // const result = new MyClass();
  // MyClass.findAll();
  // MyClass.add(result);

  class Tablet {
    name: string = "Tablet";
  }

  class MPhone {
    number: number = 123;
  }

  export class Device {
    RAM: number = 8;
  }

  export interface Device extends Tablet, MPhone {}

  const device = new Device();
  debugger;
}
