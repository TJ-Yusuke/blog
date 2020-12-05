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

export default class ArticleDriver implements ArticleDriverInterface {
  /**
   * エンドポイント取得
   * @param endpoint: エンドポイント名
   * @param id: クエリ
   * @return string: エンドポイントurl
   */
  static getEndpoint(endpoint: Endpoint, id?: string): string {
    let url: string = '';
    switch (endpoint) {
      case Endpoint.fetchDetail:
        url = `/articles/${id}`;
        break;
      case Endpoint.fetchArticles:
        url = '/articles?limit=8';
        break;
      case Endpoint.fetchArchive:
        url = '/articles?limit=100&offset=0';
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
   * デフォルトで10件取得
   * @return Promise<any>: 記事一覧取得結果
   */
  async fetchArticles(requestType: ArticleRequestType): Promise<any> {
    let type: Endpoint = null;
    switch (requestType) {
      case ArticleRequestType.TOP:
        type = Endpoint.fetchArticles;
        break;
      case ArticleRequestType.ARCHIVE:
        type = Endpoint.fetchArchive;
        break;
    }
    return await axios.get(ArticleDriver.getEndpoint(type));
  }
}
