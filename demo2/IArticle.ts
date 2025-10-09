import { IEntity } from "./core/model/IEntity";

export interface IArticle extends IEntity {
  show(): void;
}
