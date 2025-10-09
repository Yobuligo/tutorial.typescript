import { IEntity } from "./IEntity";

export interface IDBModel<TEntity extends IEntity> {
  doSomething(): TEntity;
}
