import { ArticleRepositoryInterface } from '../interface/repository/articleRepositoryInterface';
import { ArticleDriverInterface } from '../interface/driver/articleDriverInterface';
import { Articles } from '../interface/useCase/articleUseCaseInterface';
import { Article } from '../domain/entity/article';
import { createArticle } from './utility/createArticle';
import { Response } from '../interface/useCase/utility/response';

export default class ArticleRepository implements ArticleRepositoryInterface {
  readonly driver: ArticleDriverInterface;

  constructor(driver: ArticleDriverInterface) {
    this.driver = driver;
  }

  /**
   * 記事一覧取得
   * @return Promise<Response<Articles>>: 記事一覧データ
   */
  async fetchArticles(): Promise<Response<Articles>> {
    return await this.driver
      .fetchArticles()
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
