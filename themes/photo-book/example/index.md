---
title: Photo book example
class: 'grid-page-rows-6 grid-page-cols-4'
---

<main>

<div class="grid-page">

<div class="bg-gradient" style="--vs-theme--page-grid-area: page-inner / page-inner / span 3 / -3">
</div>

<div style="--vs-theme--page-grid-area: page-inner / -3 / span 2">
このサンプルのグリッドは4×6で分割しています。左の画像は左上3×3の領域に配置しており、このテキストは右上1×2の領域に配置しています。
</div>

<div class="place-end" style="--vs-theme--page-grid-area: 4 / -3">
下の画像は4×3の領域に配置していますが、画像右側のようにページの外側にはみ出すこともできます。
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 5 / page-inner / page-inner / page-outer">
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

<div class="bg-gradient" style="--vs-theme--page-grid-area: 3 / page-outer / -3"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 2"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 3"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 4"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 5"></div>

<div class="place-end" style="--vs-theme--page-grid-area: -4 / 10 / span 1 / span 2; margin-bottom: 1rem; color: white;">
このテキストのように、他の領域の上に重ねることができます。
</div>

<div style="--vs-theme--page-grid-area: -3 / 8 / span 1 / span 2">
グリッドレイアウトは非常に自由度の高いレイアウトを実現することができます。テキストの流し込み（複数領域にまたがる文章）ができないという欠点がありますが、写真やイラスト、短いテキストの組み合わせに向いているでしょう。
</div>
</div> <!-- grid-page -->

<div class="grid-page">
<div class="place-end" style="--vs-theme--page-grid-area: page-inner / page-inner / 3">
これは見開きページのサンプルです。以下の横長の画像のように、ページをまたいだ配置も実現できます。テキストもこのように2ページにまたがって配置できますが、本によってはノド（ページの綴じ目の部分）にあるテキストが読みにくくなってしまうため注意してください。また、Vivliostyleの組版の制約上、左ページ用と右ページ用に同一の内容を用意する必要があります。詳しい内容はこのページのソースを確認してみてください。
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 3 / page-outer / -3"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 2"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 3"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 4"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: -3 / 5"></div>

<div class="place-end" style="--vs-theme--page-grid-area: -4 / 10 / span 1 / span 2; margin-bottom: 1rem; color: white;">
このテキストのように、他の領域の上に重ねることができます。
</div>

<div style="--vs-theme--page-grid-area: -3 / 8 / span 1 / span 2">
グリッドレイアウトは非常に自由度の高いレイアウトを実現することができます。テキストの流し込み（複数領域にまたがる文章）ができないという欠点がありますが、写真やイラスト、短いテキストの組み合わせに向いているでしょう。
</div>
</div> <!-- grid-page -->
</div><!-- facing-pages -->

<div class="grid-page" style="background-color: black; color: #d6ff00">
<div class="bg-gradient" style="--vs-theme--page-grid-area: 1 / 4 / 4 / 6; border-radius: 0 0 120px 0"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: 2 / 2 / 4 / 4; border-radius: 120px 0 0 0"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: 4 / 2 / 6 / 4; border-radius: 0 0 0 120px"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: 4 / 4 / 6 / 6; border-radius: 0 120px 0 0"></div>
<div class="bg-gradient" style="--vs-theme--page-grid-area: 6 / 4 / 8 / -1; border-radius: 0 0 0 120px"></div>

<div style="--vs-theme--page-grid-area: 2 / 2 / -1 / 3; writing-mode: vertical-rl; text-orientation: sideways; display: grid; place-items: end start">
<h1 style="font-size: 70px; letter-spacing: 0.05em; margin: 0; transform: scaleX(90%) translateX(-50px)">
CSS組版、無限の可能性
</h1>
</div>
</div> <!-- grid-page -->

<div class="grid-page" style="background: linear-gradient(225.62deg, #CCCCCC -1.11%, #AAB195 100%), linear-gradient(135deg, #7D8D8D 0%, #BDBDA8 98.28%); font-size: 85%; line-height: 1.3">

<h1 style="--vs-theme--page-grid-area: page-inner / page-inner / span 1; display: grid; place-items: center">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
</h1>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 3 / 2"></div>
<div style="--vs-theme--page-grid-area: 3 / 3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 4 / 2"></div>
<div style="--vs-theme--page-grid-area: 4 / 3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 5 / 2"></div>
<div style="--vs-theme--page-grid-area: 5 / 3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 6 / 2"></div>
<div style="--vs-theme--page-grid-area: 6 / 3">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 3 / 4"></div>
<div style="--vs-theme--page-grid-area: 3 / 5">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 4 / 4"></div>
<div style="--vs-theme--page-grid-area: 4 / 5">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 5 / 4"></div>
<div style="--vs-theme--page-grid-area: 5 / 5">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

<div class="bg-gradient" style="--vs-theme--page-grid-area: 6 / 4"></div>
<div style="--vs-theme--page-grid-area: 6 / 5">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sequi beatae eum, hic assumenda illum illo vel! Error provident natus adipisci earum, vitae sequi quas exercitationem alias minus maiores quia.
</div>

</div> <!-- grid-page -->

</main>

<style>
  .place-end {
    display: grid;
    place-items: end;
  }

  .bg-gradient {
    background: radial-gradient(101.58% 100% at 0% 0%, #E10029 0%, #8F06E3 100%);
  }
</style>
