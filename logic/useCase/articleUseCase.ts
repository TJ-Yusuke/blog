import HttpStatusCode, {
  Response,
} from 'logic/interface/useCase/utility/response';
import {
  Articles,
  ArticleUseCaseInterface,
} from 'logic/interface/useCase/articleUseCaseInterface';
import { ArticleRepositoryInterface } from 'logic/interface/repository/articleRepositoryInterface';
import { Article } from 'logic/domain/entity/article';
import { ArticleRequestType } from '../interface/presenter/articlePresenterInterface';

export default class ArticleUseCase implements ArticleUseCaseInterface {
  readonly repository: ArticleRepositoryInterface;

  constructor(repository: ArticleRepositoryInterface) {
    this.repository = repository;
  }

  /**
   * 記事一覧取得
   */
  async fetchArticles(
    requestType: ArticleRequestType
  ): Promise<Response<Articles>> {
    return await this.repository.fetchArticles(requestType).catch((error) => {
      return {
        statusCode: HttpStatusCode.FORBIDDEN,
        error: error.data,
      };
    });
  }

  /**
   * 記事詳細取得
   * @param articleId
   */
  async fetchDetail(articleId: string): Promise<Response<Article>> {
    return await this.repository.fetchDetail(articleId).catch((error) => {
      return {
        statusCode: HttpStatusCode.FORBIDDEN,
        error: error.data,
      };
    });
  }
}
