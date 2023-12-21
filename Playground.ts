namespace Playground {
  interface IPerson {
    firstname: string;
  }

  interface ITask {
    title: string;
  }

  interface ITable<T> {
    data: T;
  }

  interface IRelation<TSource, TTarget> {
    source: TSource;
    target: TTarget;
  }

  class Person implements ITable<IPerson> {
    data: IPerson = {} as IPerson;
  }

  class Task implements ITable<ITask> {
    data: ITask = {} as ITask;
  }

  const oneToOne = <TSource, TTarget>(
    // source: new () => ITable<TSource>,
    target: new () => ITable<TTarget>
  ): IRelation<TSource, TTarget> => {
    throw new Error();
  };

  type IConfig<TSource> = { [key: string]: IRelation<TSource, any> };

  const configure = <TSource, TConfig extends IConfig<TSource>>(
    config: TConfig
  ): TConfig => {
    throw new Error();
  };

  class Builder<TSource> {
    configure<TConfig extends IConfig<TSource>>(config: TConfig): TConfig {
      throw new Error();
    }
  }

  const builder = new Builder<IPerson>();
  const relations = builder.configure({
    relation: oneToOne(Task),
  });
}
