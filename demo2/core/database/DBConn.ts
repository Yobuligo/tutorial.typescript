import { DBModelRef } from "../model/DBModelRef";
import { IDBModelRefs } from "../model/IDBModelRefs";
import { IDBModelRefsFactory } from "../model/IDBModelRefsFactory";
import { IDBConn } from "./IDBConn";

export class DBConn<TDBModelRefs extends IDBModelRefs>
  implements IDBConn<TDBModelRefs>
{
  private _models: TDBModelRefs | undefined = undefined;

  constructor(private dbModelRefsFactory: IDBModelRefsFactory<TDBModelRefs>) {}

  initModels(): void {
    if (this._models) {
      return;
    }

    const models = {} as any;
    for (const propName in this.dbModelRefsFactory) {
      const dbModelRefFactory = this.dbModelRefsFactory[propName];
      const model = dbModelRefFactory.createModel(this);
      const repo = dbModelRefFactory.createRepo(model, this);
      models[propName] = new DBModelRef(model, repo);
    }

    this._models = models;
  }

  get models(): TDBModelRefs {
    if (!this._models) {
      this.initModels();
    }
    return this._models!;
  }
}
