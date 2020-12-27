import { ArticleRequestType } from '../presenter/articlePresenterInterface';

export interface ArticleDriverInterface {
  fetchArticles(
    requestType: ArticleRequestType,
    pagination?: number
  ): Promise<any>;
  fetchDetail(articleId: string): Promise<any>;
}
