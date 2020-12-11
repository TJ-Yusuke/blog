import Document, { Head, Html, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#7ed321" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon-192x192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default CustomDocument;
