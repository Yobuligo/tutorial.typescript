namespace Playground {
  // Renderer, die eigene Komponenten zurückgeben können, um eigene Komponenten in Zellen zu rendern
  // Renderer, die einfach gecustomized werden und gesetzt werden können (fertige Renderer)
  // direkte Value formatter
  // virtuelle Spalten berücksichtigen (jemand kann implementieren, was er möchte)

  export type ReactNode = string;

  export type ICellRenderer<T> = (column: IColumn<T>, value: T) => ReactNode;

  export interface IColumn<T> {
    caption?: string;
    cellRenderer?: ICellRenderer<T>;
    minWidth?: number;
    isSortable?: boolean;
    readonly name: string;
    tooltip?: string;
    width?: number;
  }

  export interface IColumnConfig<T> {
    caption?: string;
    cellRenderer?: ICellRenderer<T>;
    minWidth?: number;
    isSortable?: boolean;
    tooltip?: string;
    width?: number;
  }

  interface IColumnConfigurer<T> {
    add(): void;
    omit(): void;
    configColumn<K extends keyof T>(
      name: K,
      config?: Omit<IColumn<T[K]>, "name">
    ): IColumnConfigurer<T>;
  }

  function buildColumns<T>(
    data?: T[],
    configurer?: (configurer: IColumnConfigurer<T>) => void
  ): IColumn<any> {
    throw new Error();
  }

  interface IPerson {
    firstname: string;
    lastname: string;
    age: number;
    birthday: Date;
  }

  const data: IPerson[] = [];

  const DateCellRenderer: ICellRenderer<Date> = () => {
    return "";
  };

  //   const columns = buildColumns<Omit<IPerson, "firstname">>(data, (configurer) => {

  const columns = buildColumns(data, (configurer) => {
    configurer
      .configColumn("age", { caption: "AGE" })
      .configColumn("firstname", { isSortable: false })
      .configColumn("age", { cellRenderer: () => "" })
      .configColumn("birthday", { cellRenderer: DateCellRenderer });
  });

  type IColumnConfig2<T> = {
    [P in keyof T]?: IColumnConfig<T[P]>;
  };

  function buildColumns2<T>(
    data?: T[],
    config?: IColumnConfig2<T>
  ): IColumn<any> {
    throw new Error();
  }

  const columns2 = buildColumns2(data, {
    age: { caption: "AGE", cellRenderer: (column, value) => "" },
    firstname: { width: 100 },
    birthday: { cellRenderer: DateCellRenderer },
  });
}
