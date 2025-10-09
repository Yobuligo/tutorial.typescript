import { IArticle } from "./IArticle";
import { DBTenantModel } from "./tenant/DBTenantModel";

export class Article extends DBTenantModel<IArticle>{  }