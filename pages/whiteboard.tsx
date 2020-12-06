//コンポーネント制作用
import React from 'react';
import { ArticlesList } from '../components/molecules/articlesList';
import { ArticlesCard } from '../components/molecules/articlesCard';
import { HorizontalCard } from '../components/molecules/horizontalCard';
import { ArchiveTableList } from '../components/molecules/archiveTableList';

const Whiteboard: React.FC<any> = () => {
  return (
    <>
      <HorizontalCard
        thumbnail={
          'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
        category={'エンジニアリング'}
        title={'今日の積み重ね'}
        outline={
          '今日というひはあなたは何をした？私は何をしたのか？日々吸収して成長しなければいけない。それが将来なんの形になるかはわからないが。'
        }
        date={'2020/08/25'}
      />
      <ArticlesCard
        thumbnail={
          'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
        category={'エンジニア'}
        title={'今日というひ'}
        outline={
          '今日というひはあなたは何をした？私は何をしたのか？日々吸収して成長しなければいけない。それが将来なんの形になるかはわからないが。'
        }
      />
      <ArticlesList
        thumbnail={
          'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
        category={'エンジニア'}
        title={'今日というひ'}
        date={'2020-8-3'}
      />
      <ul className="border-t w-full">
        <ArchiveTableList
          id={'adaf'}
          date={'2016.01.01'}
          category={'cat01'}
          title={'テキストテキスト'}
          categoryColor={'bg-blue-400'}
        />
      </ul>
    </>
  );
};
export default Whiteboard;
