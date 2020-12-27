import { ArticleRepositoryInterface } from 'logic/interface/repository/articleRepositoryInterface';
import { ArticleDriverInterface } from 'logic/interface/driver/articleDriverInterface';
import { Articles } from 'logic/interface/useCase/articleUseCaseInterface';
import { Article } from 'logic/domain/entity/article';
import { createArticle } from 'logic/repository/utility/createArticle';
import { Response } from 'logic/interface/useCase/utility/response';
import { ArticleRequestType } from '../interface/presenter/articlePresenterInterface';

export default class ArticleRepository implements ArticleRepositoryInterface {
  readonly driver: ArticleDriverInterface;

  constructor(driver: ArticleDriverInterface) {
    this.driver = driver;
  }

  /**
   * 記事一覧取得
   * @return Promise<Response<Articles>>: 記事一覧データ
   */
  async fetchArticles(
    requestType: ArticleRequestType,
    pagination?: number
  ): Promise<Response<Articles>> {
    return await this.driver
      .fetchArticles(requestType, pagination)
      .then((response) => {
        const data = response.data.contents.map((article) => {
          return createArticle(article);
        });
        const articles = {
          data: data,
        };
        return {
          statusCode: response.status,
          body: articles,
        };
      })
      .catch((error) => {
        return {
          statusCode: error.status,
          error: error.data,
        };
      });
  }

  /**
   * 記事詳細取得
   * @param articleId
   * @return Promise<Response<Article>>: 記事詳細データ
   */
  async fetchDetail(articleId: string): Promise<Response<Article>> {
    return await this.driver
      .fetchDetail(articleId)
      .then((response) => {
        return {
          statusCode: response.status,
          body: createArticle(response.data),
        };
      })
      .catch((error) => {
        return {
          statusCode: error.status,
          error: error.data,
        };
      });
  }
}
