# Layout

## Aspect Ratio

<table class="h-auto">
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
</table>

## Box Sizing

<table class="h-auto">
<tr>
<td>box-border</td>
<td>border-sizing: border-box;</td>
</tr>
<tr>
<td>box-content</td>
<td>border-sizing: content-box;</td>
</tr>
</table>

**E.g.**

```html
<div class="box-border aspect-video w-full">
  <img src="/heroimage.png" alt="cat drinking milk" class="w-full" />
</div>
```

## Float

<table class="h-auto">
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
</table>

## Display

<table class="h-auto">
<tr>
<td>d-flex</td>
<td>display: flex;</td>
</tr>
<tr>
<td>d-grid</td>
<td>display: grid;</td>
</tr>
<tr>
<td>d-block</td>
<td>display: block;</td>
</tr>
<tr>
<td>d-inline-block</td>
<td>display: inline-block;</td>
</tr>
</table>

## Flex Direction

<table class="h-auto">
<tr>
<td>flex-col</td>
<td>flex-direction: column;</td>
</tr>
<tr>
<td>flex-col-rev</td>
<td>flex-direction: column-reverse;</td>
</tr>
<tr>
<td>flex-row</td>
<td>flex-direction: row;</td>
</tr>
<tr>
<td>flex-row-rev</td>
<td>flex-direction: row-reverse;</td>
</tr>
</table>

### Center

<table class="h-auto">
<tr>
<td>center</td>
<td>justify-content: center; <br>
align-content: center;
</td>
</tr>
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

## Justify Content

<table class="h-auto">
<tr>
<td>justify</td>
<td>justify-content: center;</td>
</tr>
</table>

## Align Items

<table class="h-auto">
<tr>
<td>align</td>
<td>align-items: center;</td>
</tr>
</table>

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
