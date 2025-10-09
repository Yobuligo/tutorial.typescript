import { ArticleRepo } from "../ArticleRepo";
import { IDBModelRef } from "../core/model/IDBModelRef";
import { IArticle } from "../IArticle";
import { ITest } from "../ITest";
import { TestRepo } from "../TestRepo";

export type DBTenantModelRefsType = {
  article: IDBModelRef<IArticle, ArticleRepo>;
  test: IDBModelRef<ITest, TestRepo>;
};
