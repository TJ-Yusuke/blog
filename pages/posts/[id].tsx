import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticlePresenterInstance } from 'components/utility/instance/logic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import { Header } from 'components/organisms/header';
import Link from 'next/link';
import { ArticleRequestType } from 'logic/interface/presenter/articlePresenterInterface';
import { Footer } from 'components/organisms/footer';
import Image from 'next/image';

export const Post = ({ Content }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...ロード中です。</h1>;
  }
  if (!Content) {
    return (
      <>
        <Head>
          <meta name={'robots'} content={'noindex'} />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{Content.title} | ゆうすけオフィシャルブログ</title>
      </Head>
      <div className="bg-gray-100 font-gothic leading-normal tracking-normal">
        <Header />
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
            <span className="text-base md:text-sm text-teal-500 font-bold">
              &lt;
            </span>
            <Link href="/">
              <a className="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline">
                BACK TO BLOG
              </a>
            </Link>
            <div className="text-base md:text-sm text-gray-600 font-bold pt-6 no-underline hover:underline">
              {Content.category.name}
            </div>

            <h1 className="font-bold font-gothic break-normal text-gray-900 pb-2 text-3xl md:text-4xl">
              {Content.title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              最終更新日: {Content.updatedAt}
            </p>
          </div>
          {Content.thumbnail && (
            <img
              src={Content.thumbnail.url}
              alt={Content.title}
              className="my-4"
            />
          )}
          <div
            className="py-6 px-4 md:px-6"
            dangerouslySetInnerHTML={{ __html: Content.body }}
          />
          <div className="flex w-full items-center font-gothic px-4 py-12">
            <div className="mr-2">
              <Image
                src="/profile.jpg"
                width={70}
                height={70}
                quality={50}
                objectFit={'cover'}
                alt="profile"
                className="rounded-full max-w-full box-border z-auto object-cover w-4 h-4"
              />
            </div>
            <div className="lg:flex lg:items-center">
              <div className="flex-1 px-2">
                <p className="md:text-xl text-sm font-bold leading-none mb-2">
                  <span className="inline-block">たがわ</span>
                  <span> </span>
                  <span className="inline-block">ゆうすけ</span>
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  web開発やアプリ開発などやってます
                  <span className="block">
                    お仕事の依頼は
                    <a
                      className="text-teal-500 no-underline hover:underline"
                      href="/form"
                    >
                      <span className="inline-block">twitterのDM</span>
                    </a>
                    でお待ちしています。
                  </span>
                </p>
              </div>
              <div className="sp:pl-6 sp:grid sp:justify-items-center">
                <button className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full lg:ml-2">
                  <Link href="/profile">
                    <a>プロフィールを見る</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const getAllPostIds = async () => {
    let postIds: string[] = [];
    await ArticlePresenterInstance.fetchArticles(ArticleRequestType.ARCHIVE)
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
    paths: paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await ArticlePresenterInstance.fetchDetail(params.id);
  const Content = postData.body;
  return {
    props: {
      Content,
    },
  };
};
export default Post;
