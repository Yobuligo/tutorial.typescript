import { IArticle } from "./IArticle";
import { DBTenantModelRepo } from "./tenant/DBTenantModelRepo";

export class ArticleRepo extends DBTenantModelRepo<IArticle> {
  findArticle(): IArticle {
    throw new Error();
  }
}
