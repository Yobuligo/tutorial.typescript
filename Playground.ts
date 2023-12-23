namespace Playground {
  type IdType = string | number;

  interface IRecord<TIdType extends IdType> {
    id: TIdType;
  }

  interface IPerson extends IRecord<number> {
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

  type TableConstructor<
    TRecord,
    TTable extends Table<TRecord>
  > = new () => TTable;

  class TableRepositoryDefault {
    private readonly tables: Map<
      TableConstructor<any, Table<any>>,
      Table<any>
    > = new Map();

    fetch<TTarget extends Table<any>>(
      type: TableConstructor<any, TTarget>
    ): TTarget {
      return (this.tables.get(type) as unknown as TTarget) ?? this.create(type);
    }

    private create<TTarget extends new () => Table<any>>(
      type: TTarget
    ): TTarget {
      const table = new type();
      this.tables.set(type, table);
      return table as unknown as TTarget;
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
    constructor(private readonly db: Database) {}

    protected oneToOne<TTarget>(
      type: new () => Table<TTarget>
    ): IOneToOne<T, TTarget> {
      return new OneToOne(type);
    }

    protected belongsTo<TTarget>(
      type: new () => Table<TTarget>
    ): IRelation<T, TTarget> {
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
    readonly persons = this.oneToOne(PersonTable);
  }

  class PersonTable extends Table<IPerson> {
    readonly tasks = this.oneToOne(TaskTable);
  }

  class Database {
    define<TTarget extends Table<any>>(
      type: new (db: Database) => TTarget
    ): TTarget {
      return new type(this);
    }
  }

  const db = new Database();
  const Task = db.define(TaskTable);

  const tasks = Person.tasks.select();
  debugger;

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

namespace Playground2 {
  type IdType = string | number;

  interface IRecord<TId extends IdType> {
    id: TId;
  }

  interface ITable<TRecord extends IRecord<any>> {
    select(): TRecord[];
  }

  interface ITableRepository {
    fetch<TTable extends ITable<any>>(type: new () => TTable): TTable;
  }
}
