---
paths:
  - "src/components/**/*.html"
  - "src/pages/**/*.html"
---

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
