namespace Playground {
  /**
   * Requirements:
   * 01. Renderer, which return own components, which are responsible to render a cell
   * 02. Renderer, which are part of the framework and can be reused (like Date formatter)
   * 03. Renderer, which are part of the framework and can be customized
   * 04. Columns must be hidable
   * 05. Columns must be addable
   * 06. Columns must be orderable (the call order defines the order while displaying the columns)
   *
   * 07. RowCellRenderer should have row instead of value as parameter
   * 08. RowCellRenderer should be mandatory
   * 09. CellRenderer implementation must not change the injected column object. It must be readonly
   * 10. CellRenderer implementation must not change the injected row object. It must be readonly
   */

  // interface IPerson {
  //   firstname: string;
  //   lastname: string;
  //   age: number;
  //   birthday: Date;
  // }

  // interface INote {
  //   id: number;
  //   text: string;
  // }

  // export type ReactNode = string;

  // export type IRowCellRenderer<TRow> = (
  //   row: Readonly<IRow<TRow>>,
  //   column: Readonly<IColumn<unknown, TRow>>
  // ) => ReactNode;

  // export type ICellRenderer<TValue, TRow> = (
  //   value: TValue,
  //   row: Readonly<IRow<TRow>>,
  //   column: Readonly<IColumn<TValue, TRow>>
  // ) => ReactNode;

  // export interface IHaveRowCellRenderer<TRow> {
  //   rowCellRenderer: IRowCellRenderer<TRow>;
  // }

  // export interface IColumnBase<TValue, TRow> {
  //   caption?: string;
  //   minWidth?: number;
  //   isSortable?: boolean;
  //   readonly name: string;
  //   tooltip?: string;
  //   width?: number;
  // }

  // export interface IColumn<TValue, TRow> extends IColumnBase<TValue, TRow> {
  //   cellRenderer?: ICellRenderer<TValue, TRow>;
  // }

  // export type IVirtualColumn<TRow> = Partial<IColumnBase<unknown, TRow>> &
  //   IHaveRowCellRenderer<TRow>;

  // // export const is = <T>(object: any): object is T => {
  // //   for (const propName in object){
  // //     if (propName )
  // //   }
  // //   return true;
  // // };

  // // const object = {}
  // // if (is<IPerson>(object)){
  // //   object.
  // // }

  // export interface IRow<TRow> {
  //   data: TRow;
  // }

  // /**
  //  * Make the properties optional. So the user can control which columns should be displayed and which should be hidden.
  //  */
  // export type IColumnConfig<TRow> =
  //   | { [P in keyof TRow]?: Partial<Omit<IColumn<TRow[P], TRow>, "name">> }
  //   | { [field: string]: Omit<IVirtualColumn<TRow>, "name"> };

  // /**
  //  * An implementation of this interface is responsible for providing all relevant objects which are required to provide Columns for a specific underlying framework
  //  */
  // interface IColumnFacade {
  //   createDefaultCellRenderer<TValue, TRow>(): ICellRenderer<TValue, TRow>;
  //   map<TValue, TRow>(column: IColumn<TValue, TRow>): unknown;
  // }

  // const ColumnFacade: IColumnFacade = {} as IColumnFacade;

  // class Column<TValue, TRow> implements IColumn<TValue, TRow> {
  //   caption?: string | undefined;
  //   cellRenderer?: ICellRenderer<TValue, TRow> | undefined;
  //   minWidth?: number | undefined = 0;
  //   isSortable?: boolean | undefined = false;
  //   tooltip?: string | undefined;
  //   width?: number | undefined = 100;

  //   constructor(public readonly name: string) {
  //     this.caption = name;
  //   }
  // }

  // interface ITable<TRow> {
  //   columns: IColumnConfig<TRow>;
  // }

  // interface IColumnFactory<TRow> {
  //   create(config: IColumnConfig<TRow>): IColumnBase<unknown, TRow>[];
  // }

  // class ColumnFactory<TRow> implements IColumnFactory<TRow> {
  //   create(config: IColumnConfig<TRow>): IColumnBase<unknown, TRow>[] {
  //     const columns: IColumn<unknown, TRow>[] = [];
  //     for (const columnName in config) {
  //       const column = {
  //         ...new Column(columnName),
  //         ...(config as any)[columnName],
  //       };
  //       columns.push(column);
  //     }
  //     return columns;
  //   }
  // }

  // const isColumnFactory = (object: object): object is IColumnFactory<any> => {
  //   return "create" in object;
  // };

  // const isColumnBase = (object: object): object is IColumnBase<any, any> => {
  //   return "create" in object;
  // };

  // // const is = <T extends object>(
  // //   object: object,
  // //   check: (object: object) => boolean
  // // ): object is T => {
  // //   return check(object);
  // // };

  // function is<T extends object>(check: (object: object) => boolean) {
  //   return <T>(object: object) => {
  //     return check(object);
  //   };
  // }

  // const isVirtualColumn = is((object) => "create" in object);

  // isVirtualColumn()

  // const newColumns = new ColumnFactory<IPerson>().create({
  //   age: {
  //     cellRenderer: (value, row, column) => ``,
  //     // width: 82,
  //   },
  // });

  interface INote {
    id: number;
    text: string;
  }

  function is<T extends object>(check: (object: object) => boolean) {
    return (object: object): object is T => {
      return check(object);
    };
  }

  const isNote = is<INote>((object) => "text" in object);

  const anyObject: any = {}
  if (isNote(anyObject)){
    
  }

  debugger;
}
