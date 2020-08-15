import { Response } from '../useCase/utility/response';
import { Articles } from '../useCase/articleUseCaseInterface';
import { Article } from '../../domain/entity/article';

export interface ArticleRepositoryInterface {
  fetchArticles(): Promise<Response<Articles>>;
  fetchDetail(articleId: string): Promise<Response<Article>>;
}
