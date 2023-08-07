namespace Playground {
  interface IEntity {}

  type IFilter<T extends IEntity> = (entity: T) => boolean;

  interface IDataAccessObject<T extends IEntity> {
    add(dataObject: T): void;
    delete(dataObject: T): void;
    filter(predicate: IFilter<T>): T[];
    findAll(): T[];
  }

  class DataAccessObject<T extends IEntity> implements IDataAccessObject<T> {
    private readonly data: T[] = [];

    add(dataObject: T): void {
      this.data.push(dataObject);
    }

    delete(dataObject: T): void {
      const index = this.data.findIndex((element) => element === dataObject);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    }

    filter(predicate: IFilter<T>): T[] {
      const entities: T[] = [];
      this.data.forEach((entity) => {
        if (predicate(entity)) {
          entities.push(entity);
        }
      });
      return entities;
    }

    findAll(): T[] {
      return this.data;
    }
  }

  interface IDataAccessObjectRepo {
    fetch<T extends IEntity>(type: new () => T): IDataAccessObject<T>;
  }

  class DataAccessObjectRepoDefault implements IDataAccessObjectRepo {
    private dataAccessObjects: Map<new () => IEntity, IDataAccessObject<any>> =
      new Map();

    fetch<T extends IEntity>(type: new () => T): IDataAccessObject<T> {
      return this.dataAccessObjects.get(type) ?? this.create(type);
    }

    private create<T extends Entity>(type: new () => T): IDataAccessObject<T> {
      const dataAccessObject = new DataAccessObject<T>();
      this.dataAccessObjects.set(type, dataAccessObject);
      return dataAccessObject;
    }
  }

  const DataAccessObjectRepo = new DataAccessObjectRepoDefault();

  type Constructor<T> = new (...args: any[]) => T;

  abstract class Entity {
    static add<T extends IEntity>(this: Constructor<T>, dataObject: T) {
      DataAccessObjectRepo.fetch(this).add(dataObject);
    }

    static delete<T extends IEntity>(this: Constructor<T>, dataObject: T) {
      DataAccessObjectRepo.fetch(this).delete(dataObject);
    }

    static filter<T extends IEntity>(
      this: Constructor<T>,
      predicate: IFilter<T>
    ): T[] {
      return DataAccessObjectRepo.fetch(this).filter(predicate);
    }

    static findAll<T extends IEntity>(this: Constructor<T>): T[] {
      return DataAccessObjectRepo.fetch(this).findAll();
    }
  }

  abstract class Animal extends Entity {
    abstract kind: string;
  }

  class Lion extends Animal {
    kind: string = "Lion";

    constructor(readonly name: string) {
      super();
    }
  }

  const lion = new Lion("Bodo");
  Lion.add(lion);
  Lion.add(new Lion("Kimba"));
  Lion.add(new Lion("Simba"));
  Lion.add(new Lion("Mufasa"));
  let lions = Lion.findAll();

  Lion.delete(lion);
  lions = Lion.findAll();
  lions = Lion.filter((lion) => lion.name === "Kimba");

  debugger;
}
