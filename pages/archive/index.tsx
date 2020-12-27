import { GetStaticProps } from 'next';
import { ArticlePresenterInstance } from 'components/utility/instance/logic';
import {
  ArticleRequestType,
  ArticlesViewModel,
  ArticleViewModel,
} from 'logic/interface/presenter/articlePresenterInterface';
import React, { useEffect, useState } from 'react';
import { Header } from 'components/organisms/header';
import { Footer } from 'components/organisms/footer';
import { ArchiveTable } from 'components/organisms/archiveTable';
import { limitFetchCount } from '../../logic/driver/articleDriver';

const Index = ({ articlesJson }) => {
  const [paginationCount, setPaginationCount] = useState<number>(1);
  const [articlesList, setArticlesList] = useState<ArticleViewModel[]>(
    JSON.parse(articlesJson)
  );
  const [isLoadVisible, setIsLoadVisible] = useState<boolean>(true);
  const articles = JSON.parse(articlesJson);

  useEffect(() => {
    if (paginationCount > 1) {
      ArticlePresenterInstance.fetchArticles(
        ArticleRequestType.ARCHIVE,
        paginationCount
      )
        .then((articles) => {
          articlesList.concat(articles.body.data).length - articlesList.length <
          limitFetchCount
            ? setIsLoadVisible(false)
            : setIsLoadVisible(true);
          setArticlesList(articlesList.concat(articles.body.data));
        })
        .catch((error) => {
          throw error;
        });
    }
  }, [paginationCount]);

  return (
    <div className="bg-gray-100 font-gothic leading-normal tracking-normal">
      <Header />
      <div className="mt-16 container mx-auto md:px-32">
        <ArchiveTable articles={articlesList} />
        {isLoadVisible ? (
          <button
            className="bg-transparent border border-gray-500 border-teal-500 text-xs text-gray-500 text-teal-500 font-bold py-2 px-4 rounded-full mt-4 mb-16 focus:outline-none"
            onClick={() => {
              setPaginationCount(paginationCount + 1);
            }}
          >
            さらに読み込む...
          </button>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await ArticlePresenterInstance.fetchArticles(
    ArticleRequestType.ARCHIVE
  ).catch((error) => {
    throw error;
  });
  const articlesJson = JSON.stringify(articles.body.data);
  return {
    props: {
      articlesJson,
    },
    revalidate: 1,
  };
};
