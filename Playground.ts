namespace Playground {
  /**
   * Requirements:
   * 1. Renderer, which return own components, which are responsible to render a cell
   * 2. Renderer, which are part of the framework and can be reused (like Date formatter)
   * 3. Renderer, which are part of the framework and can be customized
   * 4. Columns must be hidable
   * 5. Columns must be addable
   * 6. Columns must be orderable (the call order defines the order while displaying the columns)
   */

  interface IPerson {
    firstname: string;
    lastname: string;
    age: number;
    birthday: Date;
  }

  interface INote {
    id: number;
    text: string;
  }

  export type ReactNode = string;

  export type ICellRenderer<T> = (value: T, column: IColumn<T>) => ReactNode;

  export type IRowCellRenderer<T> = (value: T, column: IColumn<T>) => ReactNode;

  export interface IColumnBase<TValue> {
    caption?: string;
    minWidth?: number;
    isSortable?: boolean;
    readonly name: string;
    tooltip?: string;
    width?: number;
  }

  export interface IColumn<TValue> extends IColumnBase<TValue> {
    cellRenderer?: ICellRenderer<TValue>;
  }

  export interface IVirtualColumn<TRow> extends IColumnBase<TRow> {
    rowCellRenderer: ICellRenderer<TRow>;
  }

  export interface IRow<TRow> {
    data: TRow;
  }

  /**
   * Make the properties optional. So the user can control which columns should be displayed and which should be hidden.
   */
  export type IColumnConfig<TRow> =
    | { [P in keyof TRow]?: Partial<Omit<IColumn<TRow[P]>, "name">> }
    | { [field: string]: Partial<Omit<IVirtualColumn<IRow<TRow>>, "name">> };

  /**
   * An implementation of this interface is responsible for providing all relevant objects which are required to provide Columns for a specific underlying framework
   */
  interface IColumnFacade {
    createDefaultCellRenderer<T>(): ICellRenderer<T>;
    map(column: IColumn<unknown>): unknown;
  }

  const ColumnFacade: IColumnFacade = {} as IColumnFacade;

  class Column<TValue> implements IColumn<TValue> {
    caption?: string | undefined;
    cellRenderer?: ICellRenderer<TValue> | undefined;
    minWidth?: number | undefined = 0;
    isSortable?: boolean | undefined = false;
    tooltip?: string | undefined;
    width?: number | undefined = 100;

    constructor(public readonly name: string) {
      this.caption = name;
    }
  }

  function buildColumns<TRow>(config: IColumnConfig<TRow>): IColumn<any>[] {
    const columns: IColumn<any>[] = [];

    for (const propName in config) {
      const column = new Column(propName);
      columns.push(column);
    }

    return columns;
  }

  /**
   * Provide virtual columns
   * virtual columns must have a renderer
   */
  const columns = buildColumns<IPerson>({
    firstname: {},
    age: {
      cellRenderer: (value) => ``,
    },
    test: {},
  });

  debugger;
}
