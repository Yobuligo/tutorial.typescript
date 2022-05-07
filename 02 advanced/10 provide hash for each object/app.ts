// Actually it is not possible to provide a hash to an object.
// But there is a workaround to add one dynamically

// Creates unique hash values
class HashGenerator {
  private index: number = -1;

  generate(): string {
    this.index++;
    return this.index.toString();
  }
}

// tells me if an object is hashable
interface IHashable {
  hash: string;
}

const IHashable = function () {};
IHashable.is = function (object: any): object is IHashable {
  return "hash" in object;
};

// object which has no attribute and neither a hash value
class AnyObject {}

// function to print hash value
function printHash(object: any) {
  if (!IHashable.is(object)) {
    console.log("Object is not hashable, so it has no hash");
  } else {
    console.log(`Object has hash ${object.hash}`);
  }
}

const hashGenerator = new HashGenerator();
const anyObject = new AnyObject();
printHash(anyObject);

// convert object to type any and set a hash value
let anyRef = anyObject as any;
anyRef.hash = hashGenerator.generate();
printHash(anyObject);
