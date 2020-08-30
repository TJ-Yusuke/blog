import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ArticlePresenterInstance } from '../components/utility/instance/logic';
import Link from 'next/link';

const Index = ({ articlesJson }) => {
  const articles = JSON.parse(articlesJson);
  const mainArticle = articles[0];
  const unLatest = articles.slice(1);
  console.log(articles);
  console.log(unLatest);
  //最新記事以外の記事
  const SubArticle: React.FC<{}> = () =>
    articles.slice(1).map((article, i) => {
      return (
        <div
          className={`w-full ${
            i == 3 || i == 4
              ? 'md:w-1/2'
              : i == 5
              ? 'md:w-2/3'
              : i == 6
              ? 'md:w-1/3'
              : 'md:w-1/3'
          } p-6 flex flex-col flex-grow flex-shrink`}
        >
          <Link href="posts/[id]" as={`posts/${article.id}`}>
            <a>
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <div className="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src={
                      article.thumbnail
                        ? article.thumbnail.url
                        : 'https://source.unsplash.com/collection/225/800x600'
                    }
                    className={`${
                      i == 0 || i == 1 || i == 2 ? 'h-64' : 'h-full'
                    } w-full object-cover rounded-t pb-6`}
                    alt={article.title}
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    {article.category.name}
                  </p>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    {article.title}
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    {article.body}
                  </p>
                </div>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-xs md:text-sm">
                    {article.updatedAt}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      );
    });

  return (
    <div>
      <Head>
        <title>ゆうすけオフィシャルブログ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <div
          className="w-full m-0 p-0 bg-cover bg-bottom"
          style={{
            backgroundImage: `url('cover.jpg')`,
            height: '60vh',
            maxHeight: 460,
          }}
        >
          <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
            <h1 className="text-white font-extrabold text-3xl md:text-5xl">
              <span className="inline-block">ゆうすけ</span>
              <span className="inline-block">オフィシャルブログ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500">
              Yusuke official blog
            </p>
          </div>
        </div>
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          <div className="mx-0 sm:mx-6">
            <nav className="mt-0 w-full">
              <div className="container mx-auto flex items-center">
                <div className="flex w-1/2 pl-4 text-sm">
                  <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="mr-2">
                      <a
                        className="inline-block py-2 px-2 text-white no-underline hover:underline"
                        href="post.html"
                      >
                        TOP
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                        href="#"
                      >
                        Archive
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                        href="#"
                      >
                        Category
                      </a>
                    </li>
                    <li className="mr-2">
                      <a
                        className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2"
                        href="#"
                      >
                        PROFILE
                      </a>
                    </li>
                  </ul>
                </div>

                {/*<div className="flex w-1/2 justify-end content-center">*/}
                {/*  <a*/}
                {/*    className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"*/}
                {/*    data-tippy-content="@twitter_handle"*/}
                {/*    href="https://twitter.com/intent/tweet?url=#"*/}
                {/*  >*/}
                {/*    <svg*/}
                {/*      className="fill-current h-4"*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      viewBox="0 0 32 32"*/}
                {/*    >*/}
                {/*      <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />*/}
                {/*    </svg>*/}
                {/*  </a>*/}
                {/*  <a*/}
                {/*    className="inline-block text-gray-500 no-underline hover:text-white hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 avatar"*/}
                {/*    data-tippy-content="#facebook_id"*/}
                {/*    href="https://www.facebook.com/sharer/sharer.php?u=#"*/}
                {/*  >*/}
                {/*    <svg*/}
                {/*      className="fill-current h-4"*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      viewBox="0 0 32 32"*/}
                {/*    >*/}
                {/*      <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />*/}
                {/*    </svg>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </div>
            </nav>

            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              {/*1記事目*/}
              <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                <Link href="posts/[id]" as={`posts/${mainArticle.id}`}>
                  <a className="flex flex-wrap no-underline hover:no-underline">
                    <div className="w-full md:w-2/3 rounded-t">
                      <img
                        src={
                          mainArticle.thumbnail
                            ? mainArticle.thumbnail.url
                            : 'https://source.unsplash.com/collection/494263/800x600'
                        }
                        className="h-full w-full shadow object-cover"
                        alt={mainArticle.title}
                      />
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                          {mainArticle.category.name}
                        </p>
                        <div className="w-full font-bold text-xl text-gray-900 px-6">
                          {mainArticle.title}
                        </div>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                          {mainArticle.body}
                        </p>
                      </div>
                      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                        <div className="flex items-center justify-between">
                          <p className="text-gray-600 text-xs md:text-sm">
                            {mainArticle.updatedAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="flex flex-wrap justify-between pt-12 -mx-6">
                {/*2記事目*/}
                <SubArticle />
              </div>
            </div>
            <div className="flex w-full items-center font-sans py-8 md:p-24">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="たがわゆうすけ"
              />
              <div className="flex-1 md:pr-2">
                <p className="text-base font-bold text-base md:text-xl leading-none">
                  たがわ ゆうすけ
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                  web開発やアプリ開発、wordpress構築などやってます{'  '}
                  <a
                    className="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500"
                    href="https://www.tailwindtoolbox.com"
                  >
                    お仕事のご依頼はこちら
                  </a>
                </p>
              </div>
              <div className="justify-end">
                <button className="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 font-bold py-2 px-4 rounded-full">
                  プロフィールを見る
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-900">
          <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a
                  className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline"
                  href="#"
                >
                  <span className="text-base text-gray-200">
                    ゆうすけオフィシャルブログ
                  </span>
                </a>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                    <a
                      className="inline-block py-2 px-3 text-white no-underline"
                      href="#"
                    >
                      TOP
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3"
                      href="#"
                    >
                      Archive
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3"
                      href="#"
                    >
                      Category
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3"
                      href="#"
                    >
                      PROFILE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
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
