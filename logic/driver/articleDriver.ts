import { ArticleDriverInterface } from 'logic/interface/driver/articleDriverInterface';
import { axios } from 'logic/driver/utility/axios';
import { ArticleRequestType } from '../interface/presenter/articlePresenterInterface';

enum Endpoint {
  fetchDetail,
  fetchArticles,
  fetchArchive,
  category,
  categories,
}

/**
 * 記事取得件数
 */
export const limitFetchCount: number = 10;

export default class ArticleDriver implements ArticleDriverInterface {
  /**
   * エンドポイント取得
   * @param endpoint: エンドポイント名
   * @param id: クエリ
   * @param limit: 取得件数
   * @param offset: 取得開始部分
   * @return string: エンドポイントurl
   */
  static getEndpoint(
    endpoint: Endpoint,
    id?: string,
    limit?: number,
    offset?: number
  ): string {
    let url: string = '';
    switch (endpoint) {
      case Endpoint.fetchDetail:
        url = `/articles/${id}`;
        break;
      case Endpoint.fetchArticles:
        url = '/articles?limit=8';
        break;
      case Endpoint.fetchArchive:
        url = `/articles?limit=${limit}&offset=${offset}`;
        break;
      case Endpoint.category:
        url = `/categories/${id}`;
        break;
      case Endpoint.categories:
        url = '/categories';
        break;
    }
    return url;
  }

  /**
   * 記事詳細取得
   * @param articleId: 記事ID
   * @return Promise<any>: 記事詳細取得結果
   */
  async fetchDetail(articleId: string): Promise<any> {
    return await axios.get(
      ArticleDriver.getEndpoint(Endpoint.fetchDetail, articleId)
    );
  }

  /**
   * 記事一覧取得
   * top: デフォルトで10件取得
   * archive: 100件ずつページネーション
   * @return Promise<any>: 記事一覧取得結果
   */
  async fetchArticles(
    requestType: ArticleRequestType,
    pagination?: number
  ): Promise<any> {
    let type: Endpoint = null;

    const offsetCount: number = (pagination - 1) * limitFetchCount;
    switch (requestType) {
      case ArticleRequestType.TOP:
        type = Endpoint.fetchArticles;
        break;
      case ArticleRequestType.ARCHIVE:
        type = Endpoint.fetchArchive;
        break;
    }
    return await axios.get(
      ArticleDriver.getEndpoint(type, null, limitFetchCount, offsetCount)
    );
  }
}
