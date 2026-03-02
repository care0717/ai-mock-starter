# AI mock starter

Vite + Tailwind CSS v4 + vite-plugin-singlefile を使った、単一HTMLファイルを出力する非エンジニア向けモックテンプレート。
モックを作り始めるときには既存のテンプレートHTMLを全て消して作り直す。

## 重要：ユーザーは非エンジニアです

- `npm install foo` や `npm uninstall bar` など依存関係の変更はしないこと
- `package.json`、`vite.config.js` などの設定ファイルは編集しないこと
- コードの実装方針やシステム設計についてユーザーに質問しないこと。自分で判断して進めること
- 技術用語（コンポーネント、ルーティング、ビルド等）を使わず、平易な日本語で会話すること
- ユーザーに操作を求める場合は「ターミナルで `npm run dev` と入力してください」のように具体的に伝えること

## コンポーネント / ページの書き方

各パーツは **素のHTMLファイル** として書く。`?raw` importでJS側に文字列として読み込まれる。コンポーネント化できそうなところはユーザーへの確認なしにコンポーネント化を行うこと。

```html
<!-- src/components/Example.html -->
<section class="bg-white rounded-xl p-6 shadow-sm">
  <h2 class="text-2xl font-bold mb-2">タイトル</h2>
  <p class="text-gray-500">内容</p>
</section>
```

- スタイリングにはTailwind CSSのユーティリティクラスを使う
- JSの知識は不要。HTMLだけ書けばOK

## ページの追加方法

1. `src/pages/NewPage.html` を作成
2. `src/main.js` で `?raw` importし、routerのルート定義に追加
3. 必要なら `src/components/Header.html` のナビにリンクを追加

```js
// src/main.js に追加
import newPage from "./pages/NewPage.html?raw";

const router = createRouter({
  "/": home,
  "/new": newPage,  // ← 追加
});
```

## ルーティング

- ハッシュベース: `#/`, `#/about`, `#/contact`
- `src/router.js` の `createRouter()` にルート定義を渡す
- ページ遷移は `<a href="#/about">` のようにリンクするだけ
