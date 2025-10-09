import { IDBModel } from "./IDBModel";
import { IDBModelRepo } from "./IDBModelRepo";
import { IEntity } from "./IEntity";

export interface IDBModelRef<
  TEntity extends IEntity,
  TDBModelRepo extends IDBModelRepo<TEntity>
> {
  model: IDBModel<TEntity>;
  repo: TDBModelRepo;
}
