import { IDBConn } from "../database/IDBConn";
import { IDBModel } from "./IDBModel";
import { IDBModelRefs } from "./IDBModelRefs";
import { IEntity } from "./IEntity";

export abstract class DBModel<
  TEntity extends IEntity,
  TDBModelRefs extends IDBModelRefs
> implements IDBModel<TEntity>
{
  constructor(protected readonly dbConn: IDBConn<TDBModelRefs>) {}

  doSomething(): TEntity {
    throw new Error("Method not implemented.");
  }
}
