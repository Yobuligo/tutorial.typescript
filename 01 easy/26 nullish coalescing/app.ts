// it is something like ?.let in Koltin or the ?: Elvis Operator?
// If an object is null or undefined than take an alternative

import { println } from "../../GlobalFunctions";

const objectInstance = null;
const objectInstance2 = objectInstance ?? "234324";

// Provide a function getResult that returns a IResult.
// Build a sum which takes the result and adds 123.
// As it is not ensured that data.row.result is defined the coalescing operator can be used to only sum data.row.result and 123 if data.row.result is defined.
// Otherwise the result is 123
interface IResult {
  data: {
    row?: {
      result: number;
    };
  };
}

function getResult(): IResult {
  return { data: {} };
}

const sum = getResult().data.row?.result ?? +123;


// or only return a property if it is not null
interface IIdentityCard {
  id: number;
  birthday: Date;
}

const person: {
  firstname: string;
  lastname: string;
  identityCard?: IIdentityCard;
  onEvent?: () => void;
} = {
  firstname: "Stacey",
  lastname: "Starfish",
};

// only access the identity card, if it was set
println(person?.identityCard.birthday);

// only call method if it is not undefined
person.onEvent();
