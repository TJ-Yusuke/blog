import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

export const StickyFooter: React.FC<{}> = () => {
  return (
    <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8 mb-1">
            <FontAwesomeIcon icon={faNewspaper} />
          </span>
          <span className="block text-xs leading-none">最新記事</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8 mb-1">
            <FontAwesomeIcon icon={faTh} />
          </span>
          <span className="block text-xs leading-none">カテゴリ</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8 mb-1">
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          <span className="block text-xs leading-none">おすすめ記事</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8 mb-1">
            <FontAwesomeIcon icon={faIdCard} />
          </span>
          <span className="block text-xs leading-none">プロフィール</span>
        </div>
      </a>
    </div>
  );
};
