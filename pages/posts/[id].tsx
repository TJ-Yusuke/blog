import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticlePresenterInstance } from '../../components/utility/instance/logic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';

export const Post = ({ postData }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...ロード中です。</h1>;
  }
  if (!postData) {
    return (
      <>
        <Head>
          <meta name={'robots'} content={'noindex'} />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }
  return <></>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const getAllPostIds = async () => {
    let postIds: string[] = [];
    await ArticlePresenterInstance.fetchArticles()
      .then((response) => {
        response.body.data.map((article) => {
          postIds.push(article.id);
        });
      })
      .catch((error) => {
        throw error;
      });
    return postIds.map((postId) => {
      return {
        params: {
          id: postId,
        },
      };
    });
  };
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await ArticlePresenterInstance.fetchDetail(params.id);
  return {
    props: {
      postData,
    },
  };
};
export default Post;
