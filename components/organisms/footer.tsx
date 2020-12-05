import React from 'react';

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="bg-white border-t border-gray-400 shadow">
      <div className="container max-w-4xl mx-auto flex py-8">
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
                <li>
                  <a
                    className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                    href="#"
                  >
                    Twitterやってます
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
