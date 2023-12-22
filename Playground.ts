import { } from * asfs;
} from 'fs';
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

namespace Playground2 {
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

  type IRelationConfig<TSource> = { [key: string]: IRelation<TSource, any> };

  const oneToOne = <TSource, TTarget>(
    target: ITable<TTarget>
  ): IRelation<TSource, TTarget> => {
    throw new Error();
  };

  class Person implements ITable<IPerson> {
    data: IPerson = {} as IPerson;
  }

  class Task implements ITable<ITask> {
    data: ITask = {} as ITask;
  }

  class Builder<TSource> {
    configure<TRelationConfig extends IRelationConfig<TSource>>(
      config: TRelationConfig
    ): TRelationConfig {
      throw new Error();
    }
  }

  const define = <T>(): Builder<T> => {
    throw new Error();
  };

  const TaskType = new Task();

  const result = define<IPerson>().configure({
    tasks: oneToOne(TaskType)
  });
}

namespace Playground3 {
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
  
    type IRelationConfig<TSource> = { [key: string]: IRelation<TSource, any> };

    type IConfig<TSource> = {
        relations: IRelationConfig<TSource>
    }
  
    const oneToOne = <TSource, TTarget>(
      target: ITable<TTarget>
    ): IRelation<TSource, TTarget> => {
      throw new Error();
    };
  
    class Person implements ITable<IPerson> {
      data: IPerson = {} as IPerson;
    }
  
    class Task implements ITable<ITask> {
      data: ITask = {} as ITask;
    }
  
    class Builder<TSource> {
      configure<TConfig extends IConfig<TSource>>(
        config: TConfig
      ): TConfig {
        throw new Error();
      }
    }
  
    const define = <T>(): Builder<T> => {
      throw new Error();
    };
  
    const TaskType = new Task();
  
    const result = define<IPerson>().configure({
      relations: {
        tasks: oneToOne(TaskType)
      }
    });

    result.relations.tasks.source

  }
  