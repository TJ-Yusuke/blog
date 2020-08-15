import { Response } from './utility/response';
import { Article } from '../../domain/entity/article';

export interface ArticleUseCaseInterface {
  fetchArticles(): Promise<Response<Articles>>;
  fetchDetail(articleId: string): Promise<Response<Article>>;
}

export type Articles = {
  data: Article[];
};
