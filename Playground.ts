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

    sortBy(columns: (keyof T)[]){
      throw new Error()
    }
  }

  const deriver = new Deriver<IPerson>();
  const result = deriver.columns({
    age: {
      caption: "new Column"
    }
  });
  deriver.sortBy({
      uploadDate: "ASC",
    })

  const table = new Table(persons, {
    age: {},
    firstname: { caption: "New caption" },
    test: { caption: "virtual Column" },
    test2: {},
  });

  debugger;
}
