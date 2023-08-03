namespace Playground {
  interface IColumn<TValue> {
    caption?: string;
    name?: string;
    render?: (value: TValue) => string;
  }

  type IColumnConfig<T> = { [K in keyof T]?: IColumn<T[K]> } & {
    [field: string]: IColumn<any>;
  };

  type ColumnList<K, V = {}> = {
    [P in keyof K]: V;
  };

  class Table<T> {
    constructor(private data: T[], columns: IColumnConfig<T>) {}
  }

  interface IPerson {
    age: number;
    firstname: string;
  }

  class Deriver<T> {
    columns<R extends IColumnConfig<T>>(config: R): R {
      throw new Error();
    }

    sortBy(columns: (keyof T)[]) {
      throw new Error();
    }
  }

  type IGroupByConfig<T> = {
    [P in keyof T]?: ;
  };



  debugger;
}
