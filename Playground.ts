class PropertySelector<T> {
  constructor(private instance: T) {}
  select<K extends keyof T>(key: K): T[K] {
    return this.instance[key];
  }
}

enum Habitat {
  AIR,
  LAND,
  WATER,
}

abstract class Super {
  static findAll<T>(this: new () => T): T[] {
    return;
  }
}

class Animal extends Super {
  name: string;
  age: number;
  habitat: Habitat;
}

const animal = new Animal();
const propertySelector = new PropertySelector(animal);
propertySelector.select("name");

Animal.findAll()