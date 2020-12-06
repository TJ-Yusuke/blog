import { ArticleRequestType } from '../presenter/articlePresenterInterface';

export interface ArticleDriverInterface {
  fetchArticles(requestType: ArticleRequestType): Promise<any>;
  fetchDetail(articleId: string): Promise<any>;
}
