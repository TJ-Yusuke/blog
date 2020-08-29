import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticlePresenterInstance } from '../../components/utility/instance/logic';

export const Post = ({ postDataJson }) => {
  const postData = JSON.parse(postDataJson);
  console.log(postData);
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
  const postDataJson = await JSON.stringify(postData);
  return {
    props: {
      postDataJson,
    },
  };
};
export default Post;
