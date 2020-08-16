export interface ArticleDriverInterface {
  fetchArticles(): Promise<any>;
  fetchDetail(articleId: string): Promise<any>;
}
