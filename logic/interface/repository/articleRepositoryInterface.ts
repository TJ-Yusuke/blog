import { Response } from 'logic/interface/useCase/utility/response';
import { Articles } from 'logic/interface/useCase/articleUseCaseInterface';
import { Article } from 'logic/domain/entity/article';
import { ArticleRequestType } from '../presenter/articlePresenterInterface';

export interface ArticleRepositoryInterface {
  fetchArticles(requestType: ArticleRequestType): Promise<Response<Articles>>;
  fetchDetail(articleId: string): Promise<Response<Article>>;
}
