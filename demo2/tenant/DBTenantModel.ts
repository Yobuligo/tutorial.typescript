import { DBModel } from "../core/model/DBModel";
import { IEntity } from "../core/model/IEntity";
import { DBTenantModelRefsType } from "./DBTenantModelRefsType";

export abstract class DBTenantModel<TEntity extends IEntity> extends DBModel<
  TEntity,
  DBTenantModelRefsType
> {}
