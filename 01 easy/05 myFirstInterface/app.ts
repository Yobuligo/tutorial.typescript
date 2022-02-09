import { Audi } from "./Audi";
import { BMW } from "./BMW";
import { ICar } from "./ICar";

// creates a variable of type 'ICar' and call function start polymorph for BMW and Audi
let car: ICar;
car = new BMW();
car.start();

car = new Audi();
car.start();
