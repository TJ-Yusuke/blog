//コンポーネント制作用
import React from 'react';
import { StickyFooter } from '../components/organisms/footer';
import { ArticlesList } from '../components/molecules/articlesList';
import { ArticlesCard } from '../components/molecules/articlesCard';
import { HorizontalCard } from '../components/molecules/horizontalCard';

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
      <StickyFooter />
    </>
  );
};
export default Whiteboard;
