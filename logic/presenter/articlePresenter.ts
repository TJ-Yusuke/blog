import ArticlePresenterInterface, {
  ArticleRequestType,
  ArticlesViewModel,
  ArticleViewModel,
} from 'logic/interface/presenter/articlePresenterInterface';
import { ArticleUseCaseInterface } from 'logic/interface/useCase/articleUseCaseInterface';
import HttpStatusCode, {
  Response,
} from 'logic/interface/useCase/utility/response';
import { Article } from 'logic/domain/entity/article';
import { getPlainText } from 'logic/presenter/utility/getPlainText';
import { getDateString } from 'logic/presenter/utility/getDateString';
import { getOmission } from 'logic/presenter/utility/getOmission';

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
    const omittedText = getOmission(plainText, 90);
    return {
      id: data.id,
      title: data.title,
      category: {
        id: data.category.id,
        slug: data.category.slug,
        name: data.category.name,
      },
      thumbnail: data.thumbnail,
      body: omittedText,
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
  async fetchArticles(
    requestType: ArticleRequestType
  ): Promise<Response<ArticlesViewModel>> {
    return await this.useCase
      .fetchArticles(requestType)
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
