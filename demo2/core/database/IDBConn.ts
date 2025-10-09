import { IDBModelRefs } from "../model/IDBModelRefs";

export interface IDBConn<TDBModelRefs extends IDBModelRefs> {
  models: TDBModelRefs;
  initModels(): void;
}
