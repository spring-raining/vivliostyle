---
title: Photo bookテーマ使用例
class: 'grid-page-rows-6 grid-page-cols-4'
---

<main>

<div class="grid-page">

<div class="image-cell" style="--vs-theme--page-grid-area: page-inner / page-inner / span 3 / -3">
  <img src="./assets/1262a823-9934-4783-9020-ac26fea52814.webp" alt="">
</div>

<div style="--vs-theme--page-grid-area: page-inner / -3 / span 2">
このサンプルのグリッドは4×6で分割しています。左のイラストは左上3×3の領域に配置しており、このテキストは右上1×2の領域に配置しています。
</div>

<div class="place-end" style="--vs-theme--page-grid-area: 4 / -3">
下のイラストは4×3の領域に配置していますが、画像右側のようにページの外側にはみ出すこともできます。
</div>

<div class="image-cell" style="--vs-theme--page-grid-area: 5 / page-inner / page-inner / page-outer">
  <img src="./assets/c6a9aca5-4110-4c91-8c5a-d8c3a606872f.webp" alt="">
</div>

<div style="--vs-theme--page-grid-area: -2 / page-inner / page-outer / page-outer">
このテキストのように、ページの外側に配置することもできます。画像の説明に便利です。
</div>
</div> <!-- grid-page -->

<div class="facing-pages">

<div class="grid-page">
<div class="place-end" style="--vs-theme--page-grid-area: page-inner / page-inner / 3">
これは見開きページのサンプルです。以下の横長の画像のように、ページをまたいだ配置も実現できます。テキストもこのように2ページにまたがって配置できますが、本によってはノド（ページの綴じ目の部分）にあるテキストが読みにくくなってしまうため注意してください。また、Vivliostyleの組版の制約上、左ページ用と右ページ用に同一の内容を用意する必要があります。詳しい内容はこのページのソースを確認してみてください。
</div>

<div class="image-cell" style="--vs-theme--page-grid-area: 3 / page-outer / -3">
  <img src="./assets/ae9ceb89-5ad0-4942-bc82-810bff3a5f78.webp" alt="">
</div>

<div class="place-end" style="--vs-theme--page-grid-area: -4 / 10 / span 1 / span 2; margin-bottom: 1rem; color: white;">
このテキストのように、他の領域の上に別の領域を重ねることができます。
</div>

<div style="--vs-theme--page-grid-area: -3 / page-inner / span 1 / span 4">
グリッドレイアウトは非常に自由度の高いレイアウトを実現することができます。テキストの流し込み（複数領域にまたがる文章）ができないという欠点がありますが、写真やイラスト、短いテキストの組み合わせに向いています。
</div>

<div style="--vs-theme--page-grid-area: -3 / 8 / page-inner / span 4">
なお、このサンプルに掲載されているイラストや写真は、全て画像生成AI「Midjourney」を使って生成されたものです。急速に普及しつつある画像生成の技術は、計算機科学に関わるものとして嬉しく思いますが、今後は有効活用のための議論をより活発にする必要があるでしょう。
</div>
</div> <!-- grid-page -->

<div class="grid-page">
<div class="place-end" style="--vs-theme--page-grid-area: page-inner / page-inner / 3">
これは見開きページのサンプルです。以下の横長の画像のように、ページをまたいだ配置も実現できます。テキストもこのように2ページにまたがって配置できますが、本によってはノド（ページの綴じ目の部分）にあるテキストが読みにくくなってしまうため注意してください。また、Vivliostyleの組版の制約上、左ページ用と右ページ用に同一の内容を用意する必要があります。詳しい内容はこのページのソースを確認してみてください。
</div>

<div class="image-cell" style="--vs-theme--page-grid-area: 3 / page-outer / -3">
  <img src="./assets/ae9ceb89-5ad0-4942-bc82-810bff3a5f78.webp" alt="">
</div>

<div class="place-end" style="--vs-theme--page-grid-area: -4 / 10 / span 1 / span 2; margin-bottom: 1rem; color: white;">
このテキストのように、他の領域の上に別の領域を重ねることができます。
</div>

<div style="--vs-theme--page-grid-area: -3 / page-inner / span 1 / span 4">
グリッドレイアウトは非常に自由度の高いレイアウトを実現することができます。テキストの流し込み（複数領域にまたがる文章）ができないという欠点がありますが、写真やイラスト、短いテキストの組み合わせに向いています。
</div>

<div style="--vs-theme--page-grid-area: -3 / 8 / page-inner / span 4">
なお、このサンプルに掲載されているイラストや写真は、全て画像生成AI「Midjourney」を使って生成されたものです。急速に普及しつつある画像生成の技術は、計算機科学に関わるものとして嬉しく思いますが、今後は有効活用のための議論をより活発にする必要があるでしょう。
</div>
</div> <!-- grid-page -->
</div><!-- facing-pages -->

<div class="grid-page" style="background-color: #222; color: white">
<div class="image-cell" style="--vs-theme--page-grid-area: 1 / 4 / 4 / 6; border-radius: 0 0 120px 0">
  <img src="./assets/466e72a-f981-4b5e-82ab-1ca2c1bfd623.webp" alt="">
</div>
<div class="image-cell" style="--vs-theme--page-grid-area: 2 / 2 / 4 / 4; border-radius: 120px 0 0 0">
  <img src="./assets/917456ca-fd12-4c88-9e2e-f5b1e8902516.webp" alt="">
</div>
<div class="image-cell" style="--vs-theme--page-grid-area: 4 / 2 / 6 / 4; border-radius: 0 0 0 120px">
  <img src="./assets/ad791d45-c0a0-44a9-bfeb-a089571e39e5.webp" alt="">
</div>
<div class="image-cell" style="--vs-theme--page-grid-area: 4 / 4 / 6 / 6; border-radius: 0 120px 0 0">
  <img src="./assets/0d4108aa-667a-4b2f-9746-6c43b3d676dc.webp" alt="">
</div>
<div class="image-cell" style="--vs-theme--page-grid-area: 6 / 4 / 8 / -1; border-radius: 0 0 0 120px">
  <img src="./assets/187f3b30-0b71-4888-9b88-b44248296d01.webp" alt="">
</div>

<div style="--vs-theme--page-grid-area: 6 / 2 / 8 / 4; display: grid; place-items: start start">
<div style="padding: 1rem">Gridレイアウトによる表現の可能性は無限大です。色々なレイアウトを想像してみてください。</div>
</div>
</div> <!-- grid-page -->

</main>

<style>
  .place-end {
    display: grid;
    place-items: end;
  }
  .image-cell {
    overflow: hidden;
  }
  .image-cell > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bg-gradient {
    background: radial-gradient(101.58% 100% at 0% 0%, #E10029 0%, #8F06E3 100%);
  }
</style>
