import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ArticlePresenterInstance } from '../components/utility/instance/logic';

const Index = ({ articlesJson }) => {
  const articles = JSON.parse(articlesJson);
  console.log(articles);
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
      </main>
    </div>
  );
};
export default Index;
export const getStaticProps: GetStaticProps = async () => {
  const articles = await ArticlePresenterInstance.fetchArticles().catch(
    (error) => {
      throw error;
    }
  );
  const articlesJson = JSON.stringify(articles.body.data);
  return {
    props: {
      articlesJson,
    },
  };
};
