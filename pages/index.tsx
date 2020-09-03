import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ArticlePresenterInstance } from '../components/utility/instance/logic';
import Link from 'next/link';

const Index = ({ articlesJson }) => {
  const articles = JSON.parse(articlesJson);
  const mainArticle = articles[0];
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
                  <p
                    className="text-gray-800 font-gothic text-base px-6 mb-5"
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  />
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
            backgroundImage: `url('hero.jpg')`,
            backgroundPosition: 'center',
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
                      <Link href="/">
                        <a className="inline-block py-2 px-2 text-white no-underline hover:underline">
                          TOP
                        </a>
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link href="/archive">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2">
                          Archive
                        </a>
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link href="/category">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2">
                          Category
                        </a>
                      </Link>
                    </li>
                    <li className="mr-2">
                      <Link href="/profile">
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2">
                          PROFILE
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
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
                        <div className="w-full font-bold text-xl text-gray-900 px-6 md:pb-10">
                          {mainArticle.title}
                        </div>
                        <p
                          className="text-gray-800 font-gothic text-base px-6 mb-5"
                          dangerouslySetInnerHTML={{ __html: mainArticle.body }}
                        />
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
                  <Link href="/profile">
                    <a>プロフィールを見る</a>
                  </Link>
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
                    <Link href="/">
                      <a className="inline-block py-2 px-3 text-white no-underline">
                        TOP
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/archive">
                      <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3">
                        Archive
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category">
                      <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3">
                        Category
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile">
                      <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3">
                        PROFILE
                      </a>
                    </Link>
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
    revalidate: 10,
  };
};
