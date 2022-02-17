import { println } from "../../GlobalFunctions";

class Plant {
  private _name: string = "";
  private _countGetName: number = 0;
  private _countSetName: number = 0;

  // declares a getter for _name which provides a possibility to do something before return the value
  // in this example count the number of getting the name
  public get name(): string {
    this._countGetName++;
    return this._name;
  }

  // same for set but with the new 'value' as parameter
  public set name(value: string) {
    this._countSetName++;
    this._name = value;
  }

  public get countGetName(): number {
    return this._countGetName;
  }

  public get countSetName(): number {
    return this._countSetName;
  }
}

const plant = new Plant();
plant.name = "Areca Palm";
plant.name = "Aloe Vera";
plant.name = "English Ivy";

println(plant.countGetName);
println(plant.countSetName);
