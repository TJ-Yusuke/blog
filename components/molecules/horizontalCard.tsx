import React from 'react';
import { Url } from 'logic/domain/entity/types/url';

type Props = {
  thumbnail: Url;
  category: string;
  title: string;
  outline: string;
  date: string;
};
export const HorizontalCard: React.FC<Props> = ({
  thumbnail,
  category,
  title,
  outline,
  date,
}: Props) => {
  return (
    <div className="max-w-md w-full lg:flex transform transition-all duration-300 scale-100 hover:scale-95">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${thumbnail}` }}
        title={title}
      />
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-grey-dark flex items-center">
            #{category}
          </p>
          <div className="text-black font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-base">{outline}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            {/*<p className="text-black leading-none">Jonathan Reinink</p>*/}
            <p className="text-grey-dark">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
