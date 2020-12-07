import React from 'react';
import { AppProps } from 'next/app';
import 'pages/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        p {
          font-size: 1.05rem;
          line-height: 1.5rem;
        }
        h1 {
          font-weight: bold;
          font-family: gothic, sans-serif;
          overflow-wrap: normal;
          word-break: normal;
          color: rgba(26, 32, 44, 1);
          padding-bottom: 0.5rem;
          font-size: 1.875rem;
        }
        h2 {
          display: block;
          font-size: 1.5em;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0;
          margin-inline-end: 0;
          font-weight: bold;
          padding-left: 0.85rem;
          border-left: 0.25rem solid rgba(56, 178, 172, 1);
        }
        h3 {
          display: block;
          font-size: 1.25rem;
          margin-block-start: 1.33em;
          margin-block-end: 1.33em;
          margin-inline-start: 0;
          margin-inline-end: 0;
          font-weight: bold;
        }
        h4 {
          display: block;
          margin-block-start: 1.33em;
          margin-block-end: 1.33em;
          margin-inline-start: 0;
          margin-inline-end: 0;
          font-weight: bold;
        }
        body > div > div > div > div > ul {
          list-style-type: disc;
          padding-left: 25px;
        }
        ul ul {
          list-style-type: circle;
          padding-left: 25px;
        }
        p code,
        li code {
          display: inline-block;
          padding: 0.1em 0.25em;
          color: #444;
          background-color: #e7edf3;
          border-radius: 3px;
          border: solid 1px #d6dde4;
        }
        pre {
          margin: 1rem 0;
          padding: 1em;
          border-radius: 5px;
          background: #25292f;
          color: #fff;
          white-space: pre-wrap;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        @media (min-width: 768px) {
          h1 {
            font-size: 2.25rem;
          }
          h2 {
            font-size: 1.5em;
          }
          h3 {
            font-size: 1.25rem;
          }
          h4 {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </>
  );
}
