import { GetStaticProps } from 'next';
import { ArticlePresenterInstance } from 'components/utility/instance/logic';
import { ArticleRequestType } from 'logic/interface/presenter/articlePresenterInterface';
import React from 'react';
import { Header } from 'components/organisms/header';
import { Footer } from 'components/organisms/footer';
import { ArchiveTable } from 'components/organisms/archiveTable';

const Index = ({ articlesJson }) => {
  const articles = JSON.parse(articlesJson);
  return (
    <div className="bg-gray-100 font-gothic leading-normal tracking-normal">
      <Header />
      <div className="mt-16 container mx-auto md:px-32">
        <ArchiveTable articles={articles} />
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
