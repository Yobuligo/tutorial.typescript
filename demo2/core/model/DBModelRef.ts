import { IDBModel } from "./IDBModel";
import { IDBModelRef } from "./IDBModelRef";
import { IDBModelRepo } from "./IDBModelRepo";
import { IEntity } from "./IEntity";

export class DBModelRef<
  TEntity extends IEntity,
  TDBModelRepo extends IDBModelRepo<TEntity>
> implements IDBModelRef<TEntity, TDBModelRepo>
{
  constructor(readonly model: IDBModel<TEntity>, readonly repo: TDBModelRepo) {}
}
