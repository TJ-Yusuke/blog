import { Response } from 'logic/interface/useCase/utility/response';
import { Article } from 'logic/domain/entity/article';
import { ArticleRequestType } from '../presenter/articlePresenterInterface';

export interface ArticleUseCaseInterface {
  fetchArticles(
    requestType: ArticleRequestType,
    pagination?: number
  ): Promise<Response<Articles>>;
  fetchDetail(articleId: string): Promise<Response<Article>>;
}

export type Articles = {
  data: Article[];
};
