/**
 * Switch can provide a more readable code in comparison to if, but it only compares only one value.
 * Next to the normal comparison of one value, it is possible to compare certain values.
 */

namespace Switch {
  const animal: string = "jaguar";

  switch (animal) {
    case "tiger":
    case "jaguar":
    case "cat": {
      console.log(`'${animal}' is kind of cat`);
      break;
    }
    case "dog":
    case "wolf": {
      console.log(`'${animal}' is kind of dog`);
    }
    case "snake": {
      console.log(`'${animal}' is kind of snake`);
    }
    default: {
      console.log("unknown animal");
    }
  }
}
