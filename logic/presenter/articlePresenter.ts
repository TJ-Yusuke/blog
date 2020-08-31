import ArticlePresenterInterface, {
  ArticlesViewModel,
  ArticleViewModel,
} from '../interface/presenter/articlePresenterInterface';
import { ArticleUseCaseInterface } from '../interface/useCase/articleUseCaseInterface';
import HttpStatusCode, {
  Response,
} from '../interface/useCase/utility/response';
import { Article } from '../domain/entity/article';
import { getPlainText } from './utility/getPlainText';
import { getDateString } from './utility/getDateString';

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
    const updatedAtString = getDateString(data.updatedAt);
    return {
      id: data.id,
      title: data.title,
      category: {
        id: data.category.id,
        slug: data.category.slug,
        name: data.category.name,
      },
      thumbnail: data.thumbnail,
      body: data.body,
      updatedAt: updatedAtString,
    };
  }
  static createIndexArticleViewModel(data: Article): ArticleViewModel {
    const updatedAtString = getDateString(data.updatedAt);
    const plainText = getPlainText(data.body);
    return {
      id: data.id,
      title: data.title,
      category: {
        id: data.category.id,
        slug: data.category.slug,
        name: data.category.name,
      },
      thumbnail: data.thumbnail,
      body: plainText,
      updatedAt: updatedAtString,
    };
  }

  /**
   * 記事詳細取得
   * @param articleId: 記事ID
   * @return Promise<Response<ArticleViewModel>>: 記事詳細情報取得結果
   */
  async fetchDetail(articleId): Promise<Response<ArticleViewModel>> {
    return await this.useCase
      .fetchDetail(articleId)
      .then((response) => {
        if (response.statusCode == HttpStatusCode.OK) {
          return {
            statusCode: response.statusCode,
            body: ArticlePresenter.createArticleViewModel(response.body),
          };
        } else {
          return (response as unknown) as Response<ArticleViewModel>;
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
  async fetchArticles(): Promise<Response<ArticlesViewModel>> {
    return await this.useCase
      .fetchArticles()
      .then((response) => {
        if (response.statusCode == HttpStatusCode.OK) {
          return {
            statusCode: response.statusCode,
            body: {
              data: response.body!.data.map((article) =>
                ArticlePresenter.createIndexArticleViewModel(article)
              ),
            },
          };
        } else {
          return (response as unknown) as Response<ArticlesViewModel>;
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
