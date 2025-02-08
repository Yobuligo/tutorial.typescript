namespace Playground {
  const error = (reason?: string): never => {
    throw new Error(reason);
  };

  abstract class Service<T> {
    private instance: T | undefined;
  }

  type ServiceType<T> = new () => Service<T>;

  interface IServiceProvider {
    put<T>(abstractServiceType: ServiceType<T>, service: T): void;
    find<T>(abstractServiceType: ServiceType<T>): T;
    findOrNull<T>(abstractServiceType: ServiceType<T>): T | undefined;
  }

  class ServiceProvider implements IServiceProvider {
    private services: Map<ServiceType<any>, any> = new Map();

    put<T>(abstractServiceType: ServiceType<T>, service: T): void {
      this.services.set(abstractServiceType, service);
    }

    findOrNull<T>(abstractServiceType: ServiceType<T>): T | undefined {
      return this.services.get(abstractServiceType);
    }

    find<T>(abstractServiceType: ServiceType<T>): T {
      return (
        this.findOrNull(abstractServiceType) ??
        error(`Error while finding Service. Service not found.`)
      );
    }
  }

<<<<<<< HEAD
  interface IIterator<T> {
    hasNext(): boolean;
    next(): T;
  }

  class Iterator<T> implements IIterator<T> {
    private cursor = 0;

    constructor(private items: T[]) {}

    hasNext(): boolean {
      return this.items[this.cursor] !== undefined;
    }

    next(): T {
      const item = this.items[this.cursor];
      this.cursor++;
      return item;
    }
  }

  interface IIteratorFactory {
    create<T>(items: T[]): IIterator<T>;
  }

  class IteratorFactory implements IIteratorFactory {
    create<T>(items: T[]): IIterator<T> {
      return new Iterator(items);
    }
  }

  class IteratorFactoryService extends Service<IIteratorFactory> {}

  const sp = new ServiceProvider();
  sp.put(IteratorFactoryService, new IteratorFactory());

  interface IPerson {
    age: number;
    firstname: string;
  }

  const persons: IPerson[] = [
    { firstname: "Stacey", age: 28 },
    { firstname: "Alex", age: 29 },
    { firstname: "Bertha", age: 27 },
  ];

  const person: IPerson = { age: 28, firstname: "Stacey" };

  const iterator = sp.find(IteratorFactoryService).create(persons);
  while (iterator.hasNext()) {
    const person = iterator.next();
    console.log(person.firstname);
  }

  class ValueContainer<T> {
    constructor(private value: T) {}

    getProperty<K extends keyof T>(propName: K): T[K] {
      return this.value[propName];
    }

    selectProperty<K>(selector: (instance: T) => K) {
      return selector(this.value);
    }
  }

  class Pair<T1, T2> {
    constructor(readonly first: T1, readonly second: T2) {}
  }

  const pair = <T1, T2>(first: T1, second: T2): Pair<T1, T2> => {
    return new Pair(first, second);
  };

  class Animal {
    name: string = "";
  }

  interface IFactory {
    create<T>(type: new () => T): T;
  }

  class FactoryService extends Service<IFactory> {}

  class Factory implements IFactory {
    create<T>(type: new () => T): T {
      return new type();
    }
  }

  sp.put(FactoryService, new Factory());

  const animal = sp.find(FactoryService).create(Animal);
  animal.name = "Elephant";
  console.log(animal.name);

  interface ICloneable {
    clone(): this;
  }

  class Product implements ICloneable {
    productName: string = new Date().toString();

    clone(): this {
      const product = new Product();
      product.productName = this.productName;
      return product as this;
    }
  }

  const product = new Product();
  const newProduct = product.clone();
  console.log(product.productName);
  console.log(newProduct.productName);

  interface IColumn<T> {
    width: number;
    enabled: boolean;
    name: string;
    value: T;
  }

  type ColumnConfig<T> = { [K in keyof T]: IColumn<T[K]> };

  const createColumns = <T>(): ColumnConfig<T> => {
    throw new Error();
  };

  const columnConfig = createColumns<IPerson>();

  const toUnionType = <T>(): T[keyof T] => {
    throw new Error();
  };
  const keys = toUnionType<IColumn<number>>();

  type Constructor<T> = new () => T;

  class DataObject {
    static create<T>(this: Constructor<T>): T {
      throw new Error();
    }
    static save<T>(this: Constructor<T>, item: T) {}
  }

  class Phone extends DataObject {
    phoneNumber: string = "";
  }
  Phone.save(new Phone());
  Phone.save({ phoneNumber: "+49 1126361273" });

  interface IRoute {
    readonly origin: string;
  }

  interface IStaticRoute<TPath extends string> extends IRoute {
    toPath(): TPath;
  }

  interface IParamRoute<TPath extends string> extends IRoute {
    toPath2(): TPath;
  }

  type RouteType<TPath extends string> =
    TPath extends `${infer _TPrefix}:${infer _TParamName}`
      ? IParamRoute<TPath>
      : IStaticRoute<TPath>;

  const configurePath = <TPath extends string>(
    path: TPath
  ): RouteType<TPath> => {
    throw new Error();
  };

  configurePath("/persons/:personId").toPath2();

  const Path = <T extends Constructor<any>>(path: string) => {
    return (target: T) => {};
  };

  @Path("/")
  class Route {
    path: string = "/persons";
    length: number = 128;
  }

  interface ILazy<T> {
    instance: T;
  }

  class Lazy<T> implements ILazy<T> {
    private _instance: T | undefined;

    constructor(private loader: () => T) {}

    get instance(): T {
      if (!this._instance) {
        this._instance = this.loader();
      }
      return this._instance;
    }
  }

  const lazy = new Lazy(() => new Route());
  lazy.instance.path;

  const isPerson = (value: any): value is IPerson => {
    return "age" in value && "firstname" in value;
  };

  const newPerson: any = person;

  if (isPerson(newPerson)) {
    console.log(newPerson.age);
  }
=======
  const SP: IServiceProvider = new ServiceProvider();

  interface IMyService {
    sayHello(): void;
  }

  let counter = 0;
  const uuid = () => {
    counter++;
    return counter;
  };

  @Service()
  class MyService implements IMyService {
    private id = uuid();

    sayHello() {
      console.log(`Hallo, ich bin MyService mit der uuid ${this.id}`);
    }

    private print() {
      console.log("Test");
    }
  }

  //   class MyService2 {
  //     private myService = SP.fetch(MyService);

  //     test() {
  //       this.myService.sayHello();
  //     }
  //   }

  //   class MyMock implements IMyService {
  //     sayHello(): void {
  //       console.log("Hallo, ich bin MyMock");
  //     }
  //   }

  repeat(5, () => {
    const myService = SP.fetch(MyService);
    myService.sayHello();
  });
>>>>>>> d9cc4737c8926f3a9da2341c48fefb4adf23462e
}
