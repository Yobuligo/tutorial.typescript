import { Article } from "../Article";
import { ArticleRepo } from "../ArticleRepo";
import { DBModelFactory } from "../core/model/DBModelFactory";
import { IDBModelRefsFactory } from "../core/model/IDBModelRefsFactory";
import { Test } from "../Test";
import { TestRepo } from "../TestRepo";
import { DBTenantModelRefsType } from "./DBTenantModelRefsType";

export const DBTenantModelRefsFactory: IDBModelRefsFactory<DBTenantModelRefsType> =
  {
    article: new DBModelFactory(Article, ArticleRepo),
    test: new DBModelFactory(Test, TestRepo),
  };
