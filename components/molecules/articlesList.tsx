import React from 'react';
import { Url } from 'logic/domain/entity/types/url';

type Props = {
  thumbnail: Url;
  category: string;
  title: string;
  date: string;
};

export const ArticlesList: React.FC<Props> = ({
  thumbnail,
  category,
  title,
  date,
}: Props) => {
  const thumbnialStyle = {
    background: `url(${thumbnail}), center`,
    backgroundSize: 'cover',
  };

  return (
    <div>
      <a
        href="#"
        className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95"
      >
        <div
          className="block h-24 w-2/5 rounded overflow-hidden"
          style={thumbnialStyle}
        />
        <div className="pl-3 w-3/5">
          <p className="text-xs text-gray-500 uppercase font-semibold">
            #{category}
          </p>
          <h3 className="text-md font-semibold leading-tight mb-3">{title}</h3>
          <div className="flex w-full items-center text-xs text-gray-500 font-medium">
            <div>{date}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
