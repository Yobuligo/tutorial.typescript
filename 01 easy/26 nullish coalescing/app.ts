/**
 * It is something like ?.let in Kotlin or the ?: Elvis Operator?
 * With the Elvis Operator ?? it is possible to execute code in case a condition / a method returns a null or undefined
 */

export class Caller {
  callMe(): void {
    console.log(`The Caller was called`);
  }
}

const getValue = <T>(value?: T): T | undefined => {
  return value;
};

const raiseError = (message: string) => {
  throw new Error(message);
};

// Elvis Operator ??
try {
  // Elvis operator && check if getValue returns a value, otherwise raise an exception.
  const value = getValue() ?? raiseError("Value is undefined");
  console.log(`Value is ${value}`);
} catch (e: any) {
  console.log(e);
}

try {
  // Elvis operator && check if getValue returns a value, otherwise raise an exception.
  const value = getValue("value") ?? raiseError("Value is undefined");
  console.log(`Value is ${value}`);
} catch (e: any) {
  console.log(e);
}

// Use ?. to only call a method if the calling reference is neither null not undefined
let value = getValue<Caller>();
value?.callMe();

// In that case method callMe is called as an instance for Caller is provided
value = getValue<Caller>(new Caller());
value?.callMe();

// Use !. to force the call if you know that the reference is not null or undefined. Shouldn't be used, as conditions can change
value = getValue<Caller>();
value!.callMe();
