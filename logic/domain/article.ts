import { Url } from './types/url';
import { Body } from './types/body';

export class Article {
  readonly id: string;
  readonly title: string;
  readonly category: Category;
  readonly thumbnail: Url | null;
  readonly body: Body;
  readonly updatedAt: Date;

  constructor(
    id: string,
    title: string,
    category: Category,
    thumbnail: Url | null,
    body: Body,
    updateAt: Date
  ) {
    if (thumbnail === null) {
      thumbnail = 'noImageのリンク';
    }
    this.id = id;
    this.title = title;
    this.category = category;
    this.thumbnail = thumbnail;
    this.body = body;
    this.updatedAt = updateAt;
  }
}

export class Category {
  readonly id: string;
  readonly slug: string;
  readonly name: string;

  constructor(id: string, slug: string, name: string) {
    this.id = id;
    this.slug = slug;
    this.name = name;
  }
}
