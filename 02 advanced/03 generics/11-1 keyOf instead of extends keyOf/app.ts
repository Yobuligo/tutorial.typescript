/**
 * In the past I often used <K extends keyof T>. But actually there is a shorter way to write by using keyof T.
 */

namespace KeyOfInsteadOfExtendsKeyOf {
  type EnumType = { [name: string]: any };

  enum Gender {
    Male,
    Female,
  }

  class Container<T extends EnumType> {
    constructor(readonly data: T) {}

    /**
     * This is the way I implemented key of in the past.
     */
    onSelectPrevious<K extends keyof T>(key: T[K], block: (key: T[K]) => void) {
      block(this.data[this.data[key]]);
    }

    /**
     * Even a little bit easier and the same is to use the "T[keyof T]" shortcut.
     */
    onSelectNew(key: T[keyof T], block: (key: T[keyof T]) => void) {
      block(this.data[this.data[key]]);
    }
  }

  const analyzeKey = (key: Gender) => {
    switch (key) {
      case Gender.Male: {
        console.log(`Enum value was ${Gender.Male}`);
        break;
      }
      case Gender.Female: {
        console.log(`Enum value was ${Gender.Female}`);
        break;
      }
      default: {
        console.log("Unknown value");
      }
    }
  };

  const container = new Container(Gender);
  container.onSelectPrevious(Gender.Male, (key) => analyzeKey(key));
  container.onSelectNew(Gender.Male, (key) => analyzeKey(key));
}
