import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="bg-white border-t border-gray-400 shadow">
      <div className="container max-w-4xl mx-auto flex pt-8 pb-16">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/2 ">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4 text-gray-600 text-sm">
                たがわゆうすけが日々感じたことや学んだことをシェアするブログ
              </p>
            </div>
          </div>
          <div className="flex w-full md:w-1/2">
            <div className="px-8">
              <h3 className="font-bold text-gray-900">Social</h3>
              <ul className="list-reset items-center text-sm pt-3">
                <li key="link">
                  <Link href="https://twitter.com/Raitoning0921?ref_src=twsrc%5Etfw">
                    <a
                      className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter as IconProp}
                        style={{ marginRight: 10 }}
                      />
                      Twitterやってます
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
