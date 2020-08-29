import ArticlePresenterInterface from '../interface/presenter/articlePresenterInterface';
import {
  Articles,
  ArticleUseCaseInterface,
} from '../interface/useCase/articleUseCaseInterface';
import HttpStatusCode, {
  Response,
} from '../interface/useCase/utility/response';
import { Article, Category } from '../domain/entity/article';
import { Url } from '../domain/entity/types/url';

type ArticleViewModel = {
  id: string;
  title: string;
  category: Category;
  thumbnail: Url | null;
  body: string;
  updatedAt: Date;
};

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
  static createArticleViewModel(data: Article): ArticleViewModel {
    let plainBody = data.body;
    plainBody = plainBody.replace(/<style([\s\S]*?)<\/style>/gi, '');
    plainBody = plainBody.replace(/<script([\s\S]*?)<\/script>/gi, '');
    plainBody = plainBody.replace(/<\/div>/gi, '\n');
    plainBody = plainBody.replace(/<\/li>/gi, '\n');
    plainBody = plainBody.replace(/<li>/gi, '  *  ');
    plainBody = plainBody.replace(/<\/ul>/gi, '\n');
    plainBody = plainBody.replace(/<\/p>/gi, '\n');
    plainBody = plainBody.replace(/<br\s*[\/]?>/gi, '\n');
    plainBody = plainBody.replace(/<[^>]+>/gi, '');
    return {
      id: data.id,
      title: data.title,
      category: {
        id: data.category.id,
        slug: data.category.slug,
        name: data.category.name,
      },
      thumbnail: data.thumbnail,
      body: plainBody,
      updatedAt: data.updatedAt,
    };
  }

  /**
   * 記事詳細取得
   * @param articleId: 記事ID
   * @return Promise<Response<Article>>: 記事詳細情報取得結果
   */
  async fetchDetail(articleId): Promise<Response<Article>> {
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

  /**
   * 記事一覧取得
   * @return Promise<Response<Articles>>: 記事一覧取得結果
   */
  async fetchArticles(): Promise<Response<Articles>> {
    return await this.useCase
      .fetchArticles()
      .then((response) => {
        if (response.statusCode == HttpStatusCode.OK) {
          return {
            statusCode: response.statusCode,
            body: {
              data: response.body!.data.map((article) =>
                ArticlePresenter.createArticleViewModel(article)
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
