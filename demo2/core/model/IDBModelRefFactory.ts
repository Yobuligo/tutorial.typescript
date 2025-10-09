import { IDBModelRef } from "./IDBModelRef";
import { IDBModelRepo } from "./IDBModelRepo";
import { IEntity } from "./IEntity";

export interface IDBModelRefFactory<
  TEntity extends IEntity,
  TDBModelRepo extends IDBModelRepo<TEntity>
> {
  create(): IDBModelRef<TEntity, TDBModelRepo>;
}
