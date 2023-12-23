namespace Playground {
  interface IPerson {
    firstname: string;
  }

  interface ITask {
    title: string;
  }

  interface ICar {
    brand: string;
  }

  interface IRelation<TSource, TTarget> {
    source: TSource;
    target: TTarget;
  }

  interface IOneToOne<TSource, TTarget> extends IRelation<TSource, TTarget> {
    select(): TTarget[];
  }

  class TableRepositoryDefault {
    private readonly tables: Map<new () => Table<any>, Table<any>> = new Map();

    fetch<TTarget>(type: new () => Table<TTarget>): Table<TTarget> {
      return this.tables.get(type) ?? this.create(type);
    }

    private create<TTarget>(type: new () => Table<TTarget>): Table<TTarget> {
      const table = new type();
      this.tables.set(type, table);
      return table;
    }
  }

  const TableRepository = new TableRepositoryDefault();

  class OneToOne<TSource, TTarget> implements IOneToOne<TSource, TTarget> {
    constructor(private readonly type: new () => Table<TTarget>) {}

    select(): TTarget[] {
      const table = TableRepository.fetch(this.type);
      return table.select();
    }

    source: TSource = {} as TSource;
    target: TTarget = {} as TTarget;
  }

  abstract class Table<T> {
    constructor(private readonly data: T[]) {}

    oneToOne<TTarget>(type: new () => Table<TTarget>): IOneToOne<T, TTarget> {
      return new OneToOne(type);
    }

    belongsTo<TTarget>(type: new () => Table<TTarget>): IRelation<T, TTarget> {
      throw new Error();
    }

    select(): T[] {
      throw new Error();
    }

    insert(): T[] {
      throw new Error();
    }
  }

  class TaskTable extends Table<ITask> {
    constructor() {
      super([{ title: "First Task" }]);
    }
    readonly persons = this.belongsTo(PersonTable);
  }

  class PersonTable extends Table<IPerson> {
    constructor() {
      super([{ firstname: "Stacey" }]);
    }
    readonly tasks = this.oneToOne(TaskTable);
  }

  const Task = new TaskTable();
  const Person = new PersonTable();

  const tasks = Person.tasks.select();

  // const Car = db.define<ICar>("cars").build();
  // const Task = db.define<ITask>("tasks");

  // const Person = db
  //   .define<IPerson>("persons")
  //   .relation({
  //     tasks: oneToOne(Task),
  //     car: oneToMany(CarBuilder),
  //   })
  //   .build();

  // class Person extends Table{
  //   cars = oneToMany(Car)
  // }

  // class Car extends Table{

  // }

  // const PersonBuilder = db
  //   .define<IPerson>("persons")
  //   .oneToOne(PersonBuilder)
  //   .belongsTo()
  //   .build();

  // class Builder<T> {
  //   addRelation<R>(builder: Builder<R>): Builder<T & R> {
  //     throw new Error();
  //   }

  //   addOneToOne<R>(builder: Builder<R>): Builder<T & R> {
  //     throw new Error();
  //   }

  //   build(): T {
  //     throw new Error();
  //   }
  // }

  // const carBuilder = new Builder<ICar>();

  // const personBuilder = new Builder<IPerson>();
  // const personBuilder2 = personBuilder.addRelation(carBuilder);
  // const Person = personBuilder2.build();

  // const Car = carBuilder.addRelation(personBuilder).build();

  // const taskBuilder = new Builder<ITask>();
}
