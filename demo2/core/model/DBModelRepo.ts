import { IDBConn } from "../database/IDBConn";
import { IDBModel } from "./IDBModel";
import { IDBModelRefs } from "./IDBModelRefs";
import { IDBModelRepo } from "./IDBModelRepo";
import { IEntity } from "./IEntity";

export abstract class DBModelRepo<
  TEntity extends IEntity,
  TDBModelRefs extends IDBModelRefs
> implements IDBModelRepo<TEntity>
{
  constructor(
    protected model: IDBModel<TEntity>,
    protected dbConn: IDBConn<TDBModelRefs>
  ) {}

  findAll(): TEntity[] {
    throw new Error("Method not implemented.");
  }

  insert(entity: TEntity): TEntity {
    throw new Error("Method not implemented.");
  }
}
