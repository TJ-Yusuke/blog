import React from 'react';
import { Url } from 'logic/domain/entity/types/url';

type Props = {
  thumbnail: Url;
  category: string;
  title: string;
  outline: string;
};

export const ArticlesCard: React.FC<Props> = ({
  thumbnail,
  category,
  title,
  outline,
}: Props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 transform transition-all duration-300 scale-100 hover:scale-95">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-base">{outline}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
          #{category}
        </span>
      </div>
    </div>
  );
};
