---
title: Grid system example
---

<div class="grid-page">
  <div style="background-color: rgba(255, 0, 0, 0.2)">Area 1</div>
  <div style="background-color: rgba(0, 255, 0, 0.2)">Area 2</div>
  <div style="background-color: rgba(0, 0, 255, 0.2)">Area 3</div>
</div>

<div class="facing-pages">
<div class="grid-page">
  <div>Facing page 1/Area 1</div>
  <div>Facing page 1/Area 2</div>
  <div>Facing page 1/Area 3</div>
  <div>Facing page 1/Area 4</div>
</div>

<div class="grid-page">
  <div>Facing page 2/Area 1</div>
  <div>Facing page 2/Area 2</div>
  <div>Facing page 2/Area 3</div>
  <div>Facing page 2/Area 4</div>
</div>
</div>

<style>
.grid-page > * {
  border: 2px solid red;
}
</style>
