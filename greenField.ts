/**
 * Test your code here before moving it in a concrete chapter
 */

interface IBird {
  type: "bird";
  flyingSpeed: number;
}

interface IHorse {
  type: "horse";
  runningSpeed: number;
}

type Animal = IBird | IHorse;

function getSpeed(object: Animal): number {
  switch (object.type) {
    case "bird":
      return object.flyingSpeed;
    case "horse":
      return object.runningSpeed;
    default:
      return 0;
  }
}
