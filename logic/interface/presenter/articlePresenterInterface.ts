import { Article } from '../../domain/entity/article';
import { Articles } from '../useCase/articleUseCaseInterface';
import { Response } from '../useCase/utility/response';

export default interface ArticlePresenterInterface {
  fetchDetail(articleId: string): Promise<Response<Article>>;
  fetchArticles(): Promise<Response<Articles>>;
}
