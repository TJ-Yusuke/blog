import { Category } from 'logic/domain/entity/article';
import { Response } from 'logic/interface/useCase/utility/response';
import { Url } from 'logic/domain/entity/types/url';

export type ArticleViewModel = {
  id: string;
  title: string;
  category: Category;
  thumbnail: Url | null;
  body: string;
  updatedAt: string;
};
export type ArticlesViewModel = {
  data: ArticleViewModel[];
};

export enum ArticleRequestType {
  TOP,
  ARCHIVE,
}

export default interface ArticlePresenterInterface {
  fetchDetail(articleId: string): Promise<Response<ArticleViewModel>>;
  fetchArticles(
    requestType: ArticleRequestType
  ): Promise<Response<ArticlesViewModel>>;
}
