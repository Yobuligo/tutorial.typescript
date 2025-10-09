import { IEntity } from "./IEntity";

export interface IDBModelRepo<TEntity extends IEntity> {
  findAll(): TEntity[];
  insert(entity: TEntity): TEntity;
}
