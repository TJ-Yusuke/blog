import React from 'react';
import { ArchiveTableList } from '../molecules/archiveTableList';
import { ArticleViewModel } from '../../logic/interface/presenter/articlePresenterInterface';

type Props = {
  articles: ArticleViewModel[];
};

export const ArchiveTable: React.FC<Props> = ({ articles }: Props) => {
  return (
    <ul className="border-t w-full">
      {articles.map((article) => {
        return (
          <ArchiveTableList
            id={article.id}
            date={article.updatedAt}
            category={article.category.name}
            title={article.title}
          />
        );
      })}
    </ul>
  );
};
