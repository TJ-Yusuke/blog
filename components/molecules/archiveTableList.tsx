import React from 'react';
import Link from 'next/link';

type Props = {
  id: string;
  date: string;
  category: string;
  categoryColor: string;
  title: string;
};

export const ArchiveTableList: React.FC<Props> = ({
  id,
  date,
  category,
  categoryColor,
  title,
}: Props) => {
  return (
    <li className="border-b text-base">
      <Link href="posts/[id]" as={`posts/${id}`}>
        <a className="h-20 box-border text-black table p-3 no-underline transition duration-200 ease-in-out w-full hover:bg-gray-300 hover:no-underline">
          <div className="table-cell w-40 align-middle">
            <time
              dateTime="2016-1-1"
              className="table-cell align-top pr-4 md:text-base text-xs block w-40 align-middle"
            >
              {date}
            </time>
            <p
              className={`bg-green-400 bg-${categoryColor}-400 text-xs table-cell align-middle rounded-sm text-white py-0.5 px-auto text-center w-32`}
            >
              {category}
            </p>
          </div>
          <p className="table-cell pl-6 align-middle md:text-xl text-base">
            {title}
          </p>
        </a>
      </Link>
    </li>
  );
};
