import { Url } from 'logic/domain/entity/types/url';
import { Body } from 'logic/domain/entity/types/body';

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
  readonly color: string;

  constructor(id: string, slug: string, name: string, color: string) {
    this.id = id;
    this.slug = slug;
    this.name = name;
    this.color = color;
  }
}
