import ArticlePresenterInterface from '../interface/presenter/articlePresenterInterface';
import {
  Articles,
  ArticleUseCaseInterface,
} from '../interface/useCase/articleUseCaseInterface';
import HttpStatusCode, {
  Response,
} from '../interface/useCase/utility/response';
import { Article } from '../domain/entity/article';

export default class ArticlePresenter implements ArticlePresenterInterface {
  private readonly useCase: ArticleUseCaseInterface;

  constructor(useCase: ArticleUseCaseInterface) {
    this.useCase = useCase;
  }

  /**
   * articleViewModel作成
   * @param data: articleEntityインスタンス
   * @return Article: 記事内容
   */
  static createArticleViewModel(data: Article): Article {
    return {
      id: data.id,
      title: data.title,
      category: data.category,
      thumbnail: data.thumbnail,
      body: data.body,
      updatedAt: data.updatedAt,
    };
  }

  /**
   * 記事詳細取得
   * @param articleId: 記事ID
   * @return Promise<Response<Article>>: 記事詳細情報取得結果
   */
  async fetchDetail(articleId: string): Promise<Response<Article>> {
    return await this.useCase
      .fetchDetail(articleId)
      .then((response) => {
        if (response.statusCode == HttpStatusCode.OK) {
          return {
            statusCode: response.statusCode,
            body: response.body,
          };
        } else {
          return (response as unknown) as Response<Article>;
        }
      })
      .catch((error) => {
        return {
          statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
          error: error,
        };
      });
  }

  async fetchArticles(): Promise<Response<Articles>> {
    return await this.useCase
      .fetchArticles()
      .then((response) => {
        if (response.statusCode == HttpStatusCode.OK) {
          return {
            statusCode: response.statusCode,
            body: {
              data: response.body!.data.map(
                ArticlePresenter.createArticleViewModel
              ),
            },
          };
        } else {
          return (response as unknown) as Response<Articles>;
        }
      })
      .catch((error) => {
        return {
          statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
          error: error,
        };
      });
  }
}