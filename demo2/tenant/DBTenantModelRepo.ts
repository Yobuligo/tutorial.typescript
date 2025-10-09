import { DBModelRepo } from "../core/model/DBModelRepo";
import { IEntity } from "../core/model/IEntity";
import { DBTenantModelRefsType } from "./DBTenantModelRefsType";

export abstract class DBTenantModelRepo<
  TEntity extends IEntity
> extends DBModelRepo<TEntity, DBTenantModelRefsType> {}
