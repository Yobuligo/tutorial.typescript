import { IDBModelFactory } from "./IDBModelFactory";
import { IDBModelRef } from "./IDBModelRef";
import { IDBModelRefs } from "./IDBModelRefs";
import { IEntity } from "./IEntity";

export type IDBModelRefsFactory<T extends IDBModelRefs> = {
  [P in keyof T]: IDBModelFactory<
    T[P] extends IDBModelRef<infer E, any> ? E & IEntity : never,
    T
  >;
};
