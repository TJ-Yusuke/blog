import { ArticleDriverInterface } from '../interface/driver/articleDriverInterface';
import { axios } from './utility/axios';

enum Endpoint {
  fetchDetail,
  fetchArticles,
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
        url = `/articles${id}`;
        break;
      case Endpoint.fetchArticles:
        url = '/articles';
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
  async fetchArticles(): Promise<any> {
    return await axios.get(ArticleDriver.getEndpoint(Endpoint.fetchArticles));
  }
}
