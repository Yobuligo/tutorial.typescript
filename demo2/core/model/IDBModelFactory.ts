import { IDBConn } from "../database/IDBConn";
import { IDBModel } from "./IDBModel";
import { IDBModelRefs } from "./IDBModelRefs";
import { IDBModelRepo } from "./IDBModelRepo";
import { IEntity } from "./IEntity";

export interface IDBModelFactory<
  TEntity extends IEntity,
  TDBModelRefs extends IDBModelRefs
> {
  createModel(dbConn: IDBConn<TDBModelRefs>): IDBModel<TEntity>;
  createRepo(
    model: IDBModel<TEntity>,
    dbConn: IDBConn<TDBModelRefs>
  ): IDBModelRepo<TEntity>;
}
