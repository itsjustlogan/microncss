# Layout

## Aspect Ratio

<table class="h-auto">
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>aspect-auto</td>
      <td>aspect-ratio: auto;</td>
    </tr>
    <tr>
      <td>aspect-square</td>
      <td>aspect-ratio: 1 / 1;</td>
    </tr>
    <tr>
      <td>aspect-video</td>
      <td>aspect-ratio: 16 / 9;</td>
    </tr>
  </tbody>
</table>

## Box Sizing

<table class="h-auto">
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>box-border</td>
      <td>border-sizing: border-box;</td>
    </tr>
    <tr>
      <td>box-content</td>
      <td>border-sizing: content-box;</td>
    </tr>
  </tbody>
</table>

**E.g.**

```html
<div class="box-border aspect-video w-full">
  <img src="/heroimage.png" alt="cat drinking milk" class="w-full" />
</div>
```

## Float

<table class="h-auto">
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>float-right</td>
      <td>float: right;</td>
    </tr>
    <tr>
      <td>float-left</td>
      <td>float: left;</td>
    </tr>
    <tr>
      <td>float-none</td>
      <td>float: none;</td>
    </tr>
  </tbody>
</table>

## Display

<table>
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>flex</td>
      <td>display: flex;</td>
    </tr>
    <tr>
      <td>grid</td>
      <td>display: grid;</td>
    </tr>
    <tr>
      <td>block</td>
      <td>display: block;</td>
    </tr>
    <tr>
      <td>inline</td>
      <td>display: inline;</td>
    </tr>
    <tr>
      <td>inline-block</td>
      <td>display: inline-block;</td>
    </tr>
    <tr>
      <td>inline-flex</td>
      <td>display: inline-flex;</td>
    </tr>
    <tr>
      <td>inline-grid</td>
      <td>display: inline-grid;</td>
    </tr>
    <tr>
      <td>contents</td>
      <td>display: contents;</td>
    </tr>
    <tr>
      <td>hidden</td>
      <td>display: none;</td>
    </tr>
  </tbody>
</table>

## Center

<table class="h-auto">
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>center</td>
      <td>justify-content: center; <br>
      align-content: center;
      </td>
    </tr>
  </tbody>
</table>

**E.g.**

```html
<nav class="float-right z-100">
  <ul class="d-flex">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

## Position

<table class="h-auto">
<tr>
<td>pos-fixed</td>
<td>position: fixed;</td>
</tr>
<tr>
<td>pos-rel</td>
<td>position: relative;</td>
</tr>
<tr>
<td>pos-abs</td>
<td>position: absolute;</td>
</tr>
</table>

## z-index

<table class="h-auto">
<tr>
<td>z-0</td>
<td>z-index: 0;</td>
</tr>
<tr>
<td>z-100</td>
<td>z-index: 100;</td>
</tr>
<tr>
<td>z-200</td>
<td>z-index: 200;</td>
</tr>
<tr>
<td>z-300</td>
<td>z-index: 300;</td>
</tr>
<tr>
<td>z-400</td>
<td>z-index: 400;</td>
</tr>
<tr>
<td>z-500</td>
<td>z-index: 500;</td>
</tr>
<tr>
<td>z-auto</td>
<td>z-index: auto;</td>
</tr>
</table>
