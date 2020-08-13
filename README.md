# blog by TJ-Yusuke
#### microCMS + Next.jsで爆速ブログを作る

仕事でNext.jsで開発をする機会があり、せっかくなので今後のアウトプットもかねて0から作るところからブログを初めてみます
ロジックはTypeScriptを使います<br>
現在はフロントエンジニア兼大学生です。<br>
バックエンドはわからないのでとりあえず今回はバックエンドはheadlessCMSに任せちゃいたいと思います。今後バックエンドも勉強して行けたらなと考えてます。

## 大まかな構成
- バックはHeadlessCMS(microCMS)
- Next.js v9.5.1
- ロジック部分→TypeScript
#### アーキテクチャ
アーキテクチャはデータをとってきて表示させるだけなのでなんでもいいが、今回は最近勉強したCleanArchitectureを導入してみようと思う。

Jestによるテストも練習がてらやってみる


## 環境構築
まずは環境開発からマニュアルでやっても良かったのですが、手間もコストもかかるので [公式リファレンス](https://nextjs.org/docs/getting-started) を参照しながらcreateしました
~~~Linux Kernel Module
yarn create next-app
~~~
### TypeScript導入
これもまた [公式リファレンス](https://nextjs.org/docs/basic-features/typescript) を見ながらやりました
#### tsconfig.jsonを作成
~~~Linux Kernel Module
touch tsconfig.json
~~~
#### いろいろインストール
~~~
yarn add --dev typescript @types/react @types/node
~~~
その後、サーバーを起動

### eslint, prettierなど導入
いろいろやって[typescriptの整形](https://qiita.com/y-w/items/dcf5fb4af52e990109eb#typescript%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEeslint%E3%81%A8prettier%E3%81%AE%E4%BD%B5%E7%94%A8%E8%A8%AD%E5%AE%9A) ができる様にした。(省略)

### tailwind導入
