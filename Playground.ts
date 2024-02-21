namespace Playground {
  /**
   * What we need is a complex typing, which get the placeholders from a string
   */
  type IsParameter<Part> = Part extends `:${infer ParamName}`
    ? ParamName
    : never;
  type FilteredParts<Path> = Path extends `${infer PartA}/${infer PartB}`
    ? IsParameter<PartA> | FilteredParts<PartB>
    : IsParameter<Path>;
  type Params<Path> = {[Key in FilteredParts<Path>]: string};

  /**
   * Now we define a class, that represents a route
   */
  class Route<TParams extends string> {
    constructor(readonly origin: TParams) {}

    /**
     * This methods converts the origin path by filling placeholders
     */
    toPath(params: Params<TParams>): string {
      let path = this.origin;
      for (const propName in params) {
        path.replaceAll(`:${propName}`, (params as any)[propName]);
      }
      return path;
    }
  }

  /**
   * Now we can define several routes. Therefore we provide a configure method to get the Route type safe.
   */
  type RoutesConfig = { [key: string]: Route<any> };
  export const configure = <TRouteConfig extends RoutesConfig>(
    config: TRouteConfig
  ): TRouteConfig => {
    return config;
  };

  /**
   * Next we can provide our Routes by our configure function.
   * It would even be nicer if we only had to provide the path and the configure function returns an object with converts the path to objects of type Route.
   * I tested it out, but here we lose the string itself, which means we are not able to get the parameter back
   */
  const Routes = configure({
    home: new Route("/"),
    persons: new Route("/persons/:id"),
    personImage: new Route("/persons/:id/image"),
  });

  /**
   * And finally we can either access the origin path or we can convert it to a new path which contains the placeholder values
   */
  Routes.persons.toPath({id:"Peter" });
  Routes.persons.origin;



  // const now = new Date("2024-2-7")

  // console.log(now.toLocaleDateString())

  // type IdType = string | number;

  // interface IRecord<TIdType extends IdType> {
  //   id: TIdType;
  // }

  // interface IPerson extends IRecord<number> {
  //   firstname: string;
  // }

  // interface ITask {
  //   title: string;
  // }

  // interface ICar {
  //   brand: string;
  // }

  // interface IRelation<TSource, TTarget> {
  //   source: TSource;
  //   target: TTarget;
  // }

  // interface IOneToOne<TSource, TTarget> extends IRelation<TSource, TTarget> {
  //   select(): TTarget[];
  // }

  // type TableConstructor<
  //   TRecord,
  //   TTable extends Table<TRecord>
  // > = new () => TTable;

  // class TableRepositoryDefault {
  //   private readonly tables: Map<
  //     TableConstructor<any, Table<any>>,
  //     Table<any>
  //   > = new Map();

  //   fetch<TTarget extends Table<any>>(
  //     type: TableConstructor<any, TTarget>
  //   ): TTarget {
  //     return (this.tables.get(type) as unknown as TTarget) ?? this.create(type);
  //   }

  //   private create<TTarget extends new () => Table<any>>(
  //     type: TTarget
  //   ): TTarget {
  //     const table = new type();
  //     this.tables.set(type, table);
  //     return table as unknown as TTarget;
  //   }
  // }

  // const TableRepository = new TableRepositoryDefault();

  // class OneToOne<TSource, TTarget> implements IOneToOne<TSource, TTarget> {
  //   constructor(private readonly type: new () => Table<TTarget>) {}

  //   select(): TTarget[] {
  //     const table = TableRepository.fetch(this.type);
  //     return table.select();
  //   }

  //   source: TSource = {} as TSource;
  //   target: TTarget = {} as TTarget;
  // }

  // abstract class Table<T> {
  //   constructor(private readonly db: Database) {}

  //   protected oneToOne<TTarget>(
  //     type: new () => Table<TTarget>
  //   ): IOneToOne<T, TTarget> {
  //     return new OneToOne(type);
  //   }

  //   protected belongsTo<TTarget>(
  //     type: new () => Table<TTarget>
  //   ): IRelation<T, TTarget> {
  //     throw new Error();
  //   }

  //   select(): T[] {
  //     throw new Error();
  //   }

  //   insert(): T[] {
  //     throw new Error();
  //   }
  // }

  // class TaskTable extends Table<ITask> {
  //   readonly persons = this.oneToOne(PersonTable);
  // }

  // class PersonTable extends Table<IPerson> {
  //   readonly tasks = this.oneToOne(TaskTable);
  // }

  // class Database {
  //   define<TTarget extends Table<any>>(
  //     type: new (db: Database) => TTarget
  //   ): TTarget {
  //     return new type(this);
  //   }
  // }

  // const db = new Database();
  // const Task = db.define(TaskTable);

  // const tasks = Person.tasks.select();
  // debugger;

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
<<<<<<< HEAD
  type IdType = string | number;

  interface IRecord<TId extends IdType> {
    id: TId;
  }

  interface ITable<TRecord extends IRecord<IdType>> {
    select(): TRecord[];
  }

  type TableConstructor<TTable extends ITable<any>> = new () => TTable;

  interface ITableRepository {
    fetch<TTable extends ITable<any>>(type: TableConstructor<TTable>): TTable;
  }

  abstract class Table<TRecord extends IRecord<IdType>>
    implements ITable<TRecord>
  {
    protected oneToOne() {}

    protected oneToMany() {}
    
    protected manyToMany() {}

    select(): TRecord[] {
      throw new Error("Method not implemented.");
    }
  }

  interface IPerson extends IRecord<number> {
    firstname: string;
  }

  interface ITask extends IRecord<number> {
    title: string;
  }

  class Person extends Table<IPerson> {}

  class Task extends Table<ITask> {}
=======
  // type IdType = string | number;
  // interface IRecord<TId extends IdType> {
  //   id: TId;
  // }
  // interface ITable<TRecord extends IRecord<any>> {
  //   select(): TRecord[];
  // }
  // interface ITableRepository {
  //   fetch<TTable extends ITable<any>>(type: new () => TTable): TTable;
  // }
>>>>>>> e57865950a51b121836e848fc3b2c60d15d7e483
}
