// it is something like ?.let in Koltin or the ?: Elvis Operator?
// If an object is null or undefined than take an alternative

import { println } from "../../GlobalFunctions";

const objectInstance = null;
const objectInstance2 = objectInstance ?? "234324";

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
