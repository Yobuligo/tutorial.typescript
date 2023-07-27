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

  // RowCellRenderer should have row instead of value as parameter
  // RowCellRenderer should be mandatory

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

  export type ICellRenderer<TValue, TRow> = (
    value: TValue,
    column: IColumn<TValue, TRow>
  ) => ReactNode;

  export type IRowCellRenderer<TRow> = (
    row: TRow,
    column: IColumn<unknown, TRow>
  ) => ReactNode;

  export interface IColumnBase<TValue, TRow> {
    caption?: string;
    minWidth?: number;
    isSortable?: boolean;
    readonly name: string;
    tooltip?: string;
    width?: number;
  }

  export interface IColumn<TValue, TRow> extends IColumnBase<TValue, TRow> {
    cellRenderer?: ICellRenderer<TValue, TRow>;
  }

  export interface IVirtualColumn<TRow> extends IColumnBase<unknown, TRow> {
    rowCellRenderer: IRowCellRenderer<TRow>;
  }

  export interface IRow<TRow> {
    data: TRow;
  }

  /**
   * Make the properties optional. So the user can control which columns should be displayed and which should be hidden.
   */
  export type IColumnConfig<TRow> =
    | { [P in keyof TRow]?: Partial<Omit<IColumn<TRow[P], TRow>, "name">> }
    | { [field: string]: Partial<Omit<IVirtualColumn<IRow<TRow>>, "name">> };

  /**
   * An implementation of this interface is responsible for providing all relevant objects which are required to provide Columns for a specific underlying framework
   */
  interface IColumnFacade {
    createDefaultCellRenderer<TValue, TRow>(): ICellRenderer<TValue, TRow>;
    map<TValue, TRow>(column: IColumn<TValue, TRow>): unknown;
  }

  const ColumnFacade: IColumnFacade = {} as IColumnFacade;

  class Column<TValue, TRow> implements IColumn<TValue, TRow> {
    caption?: string | undefined;
    cellRenderer?: ICellRenderer<TValue, TRow> | undefined;
    minWidth?: number | undefined = 0;
    isSortable?: boolean | undefined = false;
    tooltip?: string | undefined;
    width?: number | undefined = 100;

    constructor(public readonly name: string) {
      this.caption = name;
    }
  }

  function buildColumns<TRow>(
    config: IColumnConfig<TRow>
  ): IColumn<unknown, unknown>[] {
    const columns: IColumn<any, any>[] = [];

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
    age:{
        cellRenderer: (value)=>``
    },
    test: {
        rowCellRenderer: (row)=>``
    }
  });

  debugger;
}
