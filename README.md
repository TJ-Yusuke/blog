# microCMS + Next.jsでブログを作る

仕事でNext.jsで開発をする機会があり、せっかくなので今後のアウトプットもかねて0から作るところからブログを初めてみます
<br>
バックエンドはわからないのでとりあえず今回はバックエンドはheadlessCMSに任せたいと思います。今後バックエンドも勉強して行けたらなと考えてます。

## 大まかな構成
- バックはHeadlessCMS(microCMS)
- Next.js v9.5.1
- ロジック部分 : TypeScript

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

 +α tailwindとstyled-components導入など

## アーキテクチャ
CMSとしてmicroCMSを採用、フロントとAPIを介してデータをやりとりします。

## view周り
microCMSのリッチエディタで入力した物はHTMLの文字列で返ってきてしまうので、<br>

`<div dangerouslySetInnerHTML={{ __html: hogehogehogehoge }}`<br>

に無理やり突っ込んでDOMを作成した。
<br>※この方法は非推奨であまりやりたくなかったのですが、これ以外の方法が見当たらなかったのでこれにしました。他に知っている方法があれば教えてください


## View部分の設計
```
blog/
┣ components/
┃   ┝ atoms
┃    ┃    └ texts
┃    ┃        ┝ h1.tsx
┃    ┃        ┝ h2.tsx
┃    ┃        └ text.tsx
┃    ┝ molecules
┃    ┃    └cards
┃    ┃        ┝ articleCard.tsx
┃    ┃        └ profileCard.tsx
┃    ┃
┃    └organisms
┃        ┝ articles.tsx
┃        ┝ footer.tsx
┃        └ header.tsx
┣ pages
...
```
はじめにこんな感じで整理するために骨組みだけ作ります。開発していくうちに変更などするので最終的な物を知りたければgitのソースをご覧ください。
デザインはtailwind componentsを参考にしました。

## 静的ジェネレート
indexページと[id]ページで静的データ取得をした。
[id]ページ（記事詳細）ではgetStaticPathを使って動的ルーティングによってページを静的に生成した。
    getStaticPathはかならず
    
```
    {
      params: {
            params: id
      }, 
      fallback = true | false
    }
  ```

  の形で返さなければならず、getStaticPropsを用いる時はその引数にparamsを加える必要がある。
  params.idを指定すると記事詳細に表示される記事IDをとることができ、それを記事詳細のデータをとってくるメソッドの引数にしてデータをとってきた。
  - ハマったこと
  
    記事詳細のデータをとってくるメソッドの引数をtypescriptで型を```string```にしてしまっていたのでparams.idの型はstring | string[]であったため型エラーが吐き出されてしまい、データをとって来れなかった。
  - 対策
  
     記事詳細データ取得メソッドの引数をやむおえずany型にすることで対処した。