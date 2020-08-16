import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ArticlePresenterInstance } from '../components/utility/instance/logic';
import HttpStatusCode from '../logic/interface/useCase/utility/response';
import { Article } from '../logic/domain/entity/article';

const Index = ({ articlesJson }) => {
  const articlesData = JSON.parse(articlesJson);
  const articles = articlesData.body.data;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-green-400 text-5xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: articles[1].body }} />
      </main>
    </div>
  );
};
export default Index;
export const getStaticProps = async () => {
  const articles = await ArticlePresenterInstance.fetchArticles().catch(
    (error) => {
      throw error;
    }
  );
  const articlesJson = JSON.stringify(articles);
  return {
    props: {
      articlesJson,
    },
  };
};
