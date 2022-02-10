import { println } from "../../GlobalFunctions";
import { Audi } from "./Audi";
import { BMW } from "./BMW";
import { ICar } from "./ICar";

function checkSpoiler(car: ICar) {
  if (car.spoilerSize == null) {
    println(`${car.name} has no spoiler`);
  } else {
    println(`${car.name} has a spoiler with size ${car.spoilerSize}`);
  }
}

// creates a variable of type 'ICar' and call function start polymorph for BMW and Audi
let car: ICar;
car = new BMW();
car.start();
checkSpoiler(car);

car = new Audi();
car.start();
checkSpoiler(car);
