// An approach some kind of workaround for the reason that interface are no real types in javascript.
// Instead any interface gets a property e.g. type or whatever.
// Later we use a intersection type to combine multiple interfaces.
// To differ the interface (either IBird or IHorse) the property type is read, which is available for both interfaces.
// So it is possible to access in a type safe way either the property flyingSpeed for IBird or runningSpeed for IHorse.
// It is even interesting that "bird" and "horse" are suggested in the switch statement by the compiler.

interface IBird {
  type: "bird";
  flyingSpeed: number;
}

interface IHorse {
  type: "horse";
  runningSpeed: number;
}

type MyAnimal = IBird | IHorse;

function getSpeed(object: MyAnimal): number {
  switch (object.type) {
    case "bird":
      return object.flyingSpeed;
    case "horse":
      return object.runningSpeed;
    default:
      return 0;
  }
}

// Discriminated Union Object with enumeration
enum Medium {
  BOOK,
  PC,
  TV,
}

// the types either as separate interfaces or the type directly declared as a union type
interface IBook {
  type: Medium.BOOK;
  pages: number;
}

type IMedium =
  | IBook
  | { type: Medium.PC; url: string }
  | { type: Medium.TV; channel: string };

const evaluateMedium = (medium: IMedium) => {
  switch (medium.type) {
    case Medium.BOOK: {
      console.log(`Access type safe ${medium.pages}`);
      break;
    }
    case Medium.PC: {
      console.log(`Access type safe ${medium.url}`);
      break;
    }
    case Medium.TV: {
      console.log(`Access type safe ${medium.channel}`);
      break;
    }
  }
};
