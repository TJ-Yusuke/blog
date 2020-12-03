import HttpStatusCode, {
  Response,
} from 'logic/interface/useCase/utility/response';
import {
  Articles,
  ArticleUseCaseInterface,
} from 'logic/interface/useCase/articleUseCaseInterface';
import { ArticleRepositoryInterface } from 'logic/interface/repository/articleRepositoryInterface';
import { Article } from 'logic/domain/entity/article';

export default class ArticleUseCase implements ArticleUseCaseInterface {
  readonly repository: ArticleRepositoryInterface;

  constructor(repository: ArticleRepositoryInterface) {
    this.repository = repository;
  }

  /**
   * 記事一覧取得
   */
  async fetchArticles(): Promise<Response<Articles>> {
    return await this.repository.fetchArticles().catch((error) => {
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
