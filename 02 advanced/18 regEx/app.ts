/**
 * An example of regular expression for a like function
 */

export type IPredicate<T> = (value: T) => boolean;

function regExEscape(value: string) {
  return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

export function like<T>(value: T): IPredicate<T> {
  const valueString = String(value);
  let regExString = "";

  const valueStringList = valueString.split("*");
  if (valueStringList.length === 1) {
    regExString = regExEscape(valueString);
  } else {
    valueStringList.forEach((value, index) => {
      let handled = false;

      // starts with *? e.g. *ello
      if (index === 0 && value === "") {
        regExString += `^`;
        handled = true;
      }

      // if it is not first and not last element e.g. l in h*l*o
      if (!handled && index < valueStringList.length - 1) {
        regExString += `${regExEscape(value)}.*`;
        handled = true;
      }

      // ends with *? e.g. hell*
      if (!handled && index === valueStringList.length - 1 && value === "") {
        regExString += `$`;
        handled = true;
      }

      // not handled yet? e.g. a in *a
      if (!handled) {
        regExString += `${regExEscape(value)}`;
      }
    });
  }

  const regex = new RegExp(regExString);
  return (operand: T) => {
    if (String(operand).match(regex)) {
      return true;
    } else {
      return false;
    }
  };
}

const predicate = like("hel*");
if (predicate("hello")) {
  console.log("fits");
} else {
  console.log("doesn't fit");
}

console.log("matches");

console.log(like("hel*")("hello"));
console.log(like("*lo")("hello"));
console.log(like("he*o")("hello"));
console.log(like("he*l*lo")("hello"));
console.log(like("hello")("hello"));

console.log("doesn't match");
console.log(like("pel*")("hello"));
console.log(like("*a")("hello"));
console.log(like("pe*o")("hello"));
console.log(like("he*p*lo")("hello"));
console.log(like("hello2")("hello"));

console.log(`\n`);
if ("Hello World".match(/World$/)) {
  console.log("does match");
} else {
  console.log("doesn't match");
}
