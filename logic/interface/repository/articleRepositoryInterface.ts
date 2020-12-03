import { Response } from 'logic/interface/useCase/utility/response';
import { Articles } from 'logic/interface/useCase/articleUseCaseInterface';
import { Article } from 'logic/domain/entity/article';

export interface ArticleRepositoryInterface {
  fetchArticles(): Promise<Response<Articles>>;
  fetchDetail(articleId: string): Promise<Response<Article>>;
}
