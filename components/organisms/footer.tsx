import React from 'react';

export const StickyFooter: React.FC<{}> = () => {
  return (
    <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-newspaper-variant-outline"></i>
          </span>
          <span className="block text-xs leading-none">最新記事</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-apps"></i>
          </span>
          <span className="block text-xs leading-none">カテゴリ</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-star-outline"></i>
          </span>
          <span className="block text-xs leading-none">おすすめ記事</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <i className="mdi mdi-magnify"></i>
          </span>
          <span className="block text-xs leading-none">プロフィール</span>
        </div>
      </a>
    </div>
  );
};
