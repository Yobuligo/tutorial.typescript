import { IDBConn } from "../database/IDBConn";
import { IDBModel } from "./IDBModel";
import { IDBModelFactory } from "./IDBModelFactory";
import { IDBModelRefs } from "./IDBModelRefs";
import { IDBModelRepo } from "./IDBModelRepo";
import { IEntity } from "./IEntity";

export class DBModelFactory<
  TEntity extends IEntity,
  TDBModelRepo extends IDBModelRepo<TEntity>,
  TDBModelRefs extends IDBModelRefs
> implements IDBModelFactory<TEntity, TDBModelRefs>
{
  constructor(
    private readonly modelType: new (
      dbConn: IDBConn<TDBModelRefs>
    ) => IDBModel<TEntity>,
    private readonly repoType: new (
      model: IDBModel<TEntity>,
      dbConn: IDBConn<TDBModelRefs>
    ) => TDBModelRepo
  ) {}

  createModel(dbConn: IDBConn<TDBModelRefs>): IDBModel<TEntity> {
    return new this.modelType(dbConn);
  }

  createRepo(
    model: IDBModel<TEntity>,
    dbConn: IDBConn<TDBModelRefs>
  ): IDBModelRepo<TEntity> {
    return new this.repoType(model, dbConn);
  }
}
