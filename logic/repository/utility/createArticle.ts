import { Article, Category } from 'logic/domain/entity/article';
import { Body } from 'logic/domain/entity/types/body';

/**
 * ArticleEntityインスタンス作成
 * @param data: Jsonレスポンス
 * @return Article: 記事内容
 */
export const createArticle = (data: any): Article => {
  const id: string = data.id;
  const title: string = data.title;
  const category = new Category(
    data.category[0].id,
    data.category[0].categorySlug,
    data.category[0].categoryName,
    data.category[0].categoryColor
  );
  const thumbnail = data.thumbnail ? data.thumbnail : null;
  const body: Body = data.body;
  const updatedAt = new Date(data.updatedAt);

  return new Article(id, title, category, thumbnail, body, updatedAt);
};
