interface IDataObject {
  id: number;
}

interface IPerson extends IDataObject {}

interface IAnimal extends IDataObject {
  name: string;
  age: number;
}

const dataObject: IDataObject = { id: 123 };
const animal: IAnimal = <IAnimal>dataObject;
