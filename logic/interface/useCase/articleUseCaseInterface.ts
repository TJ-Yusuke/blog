import { Response } from 'logic/interface/useCase/utility/response';
import { Article } from 'logic/domain/entity/article';

export interface ArticleUseCaseInterface {
  fetchArticles(): Promise<Response<Articles>>;
  fetchDetail(articleId: string): Promise<Response<Article>>;
}

export type Articles = {
  data: Article[];
};
