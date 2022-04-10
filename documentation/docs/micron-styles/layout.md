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
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>fixed</td>
      <td>position: fixed;</td>
    </tr>
    <tr>
      <td>relative</td>
      <td>position: relative;</td>
    </tr>
    <tr>
      <td>absolute</td>
      <td>position: absolute;</td>
    </tr>
  </tbody>
</table>

## Top / Bottom / Left / Right

### Top

<br>

<table>
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>top-0</td>
      <td>top: 0;</td>
    </tr>
    <tr>
      <td>top-0.5</td>
      <td>top: 0.0625rem; &nbsp;/*&nbsp;1px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-1</td>
      <td>top: 0.125rem; &nbsp;/*&nbsp;2px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-1.5</td>
      <td>top: 0.25rem; &nbsp;/*&nbsp;4px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-2</td>
      <td>top: 0.375rem; &nbsp;/*&nbsp;6px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-2.5</td>
      <td>top: 0.5rem; &nbsp;/*&nbsp;8px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-3</td>
      <td>top: 0625rem; &nbsp;/*&nbsp;10px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-3.5</td>
      <td>top: 0.75rem; &nbsp;/*&nbsp;12px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-4</td>
      <td>top: 0.875rem; &nbsp;/*&nbsp;14px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-5</td>
      <td>top: 1rem; &nbsp;/*&nbsp;16px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-6</td>
      <td>top: 1.25rem; &nbsp;/*&nbsp;20px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-7</td>
      <td>top: 1.5rem; &nbsp;/*&nbsp;24px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-8</td>
      <td>top: 1.75rem; &nbsp;/*&nbsp;28px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-9</td>
      <td>top: 2rem; &nbsp;/*&nbsp;32px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-10</td>
      <td>top: 2.25rem; &nbsp;/*&nbsp;36px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-11</td>
      <td>top: 2.5rem; &nbsp;/*&nbsp;40px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-12</td>
      <td>top: 2.75rem; &nbsp;/*&nbsp;44px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-14</td>
      <td>top: 3rem; &nbsp;/*&nbsp;48px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-16</td>
      <td>top: 3.25rem; &nbsp;/*&nbsp;52px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-20</td>
      <td>top: 3.5rem; &nbsp;/*&nbsp;56px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-24</td>
      <td>top: 3.75rem; &nbsp;/*&nbsp;60px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-28</td>
      <td>top: 4rem; &nbsp;/*&nbsp;64px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-32</td>
      <td>top: 5rem; &nbsp;/*&nbsp;80px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-36</td>
      <td>top: 6rem; &nbsp;/*&nbsp;96px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-40</td>
      <td>top: 7rem; &nbsp;/*&nbsp;112px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-44</td>
      <td>top: 8rem; &nbsp;/*&nbsp;128px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-48</td>
      <td>top: 9rem; &nbsp;/*&nbsp;144px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-52</td>
      <td>top: 10rem; &nbsp;/*&nbsp;160px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-56</td>
      <td>top: 11rem; &nbsp;/*&nbsp;176px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-60</td>
      <td>top: 12rem; &nbsp;/*&nbsp;192px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-64</td>
      <td>top: 13rem; &nbsp;/*&nbsp;208px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-72</td>
      <td>top: 14rem; &nbsp;/*&nbsp;224px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-80</td>
      <td>top: 15rem; &nbsp;/*&nbsp;240px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-88</td>
      <td>top: 16rem; &nbsp;/*&nbsp;256px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-96</td>
      <td>top: 18rem; &nbsp;/*&nbsp;288px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-104</td>
      <td>top: 20rem; &nbsp;/*&nbsp;320px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-112</td>
      <td>top: 22rem; &nbsp;/*&nbsp;352px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-120</td>
      <td>top: 24rem; &nbsp;/*&nbsp;384px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-128</td>
      <td>top: 26rem; &nbsp;/*&nbsp;416px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-136</td>
      <td>top: 28rem; &nbsp;/*&nbsp;448px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-144</td>
      <td>top: 30rem; &nbsp;/*&nbsp;480px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-152</td>
      <td>top: 32rem; &nbsp;/*&nbsp;512px&nbsp;*/</td>
    </tr>
    <tr>
      <td>top-1/2</td>
      <td>top: 50%;</td>
    </tr>
    <tr>
      <td>top-1/3</td>
      <td>top: 33.33333%;</td>
    </tr>
    <tr>
      <td>top-2/3</td>
      <td>top: 66.66667%;</td>
    </tr>
    <tr>
      <td>top-1/4</td>
      <td>top: 25%;</td>
    </tr>
    <tr>
      <td>top-2/4</td>
      <td>top: 50%);</td>
    </tr>
    <tr>
      <td>top-3/4</td>
      <td>top: 75%;</td>
    </tr>
    <tr>
      <td>top-1/5</td>
      <td>top: 20%;</td>
    </tr>
    <tr>
      <td>top-2/5</td>
      <td>top: 40%;</td>
    </tr>
    <tr>
      <td>top-3/5</td>
      <td>top: 60%;</td>
    </tr>
    <tr>
      <td>top-4/5</td>
      <td>top: 80%;</td>
    </tr>
    <tr>
      <td>top-1/6</td>
      <td>top: 16.66667%;</td>
    </tr>
    <tr>
      <td>top-2/6</td>
      <td>top: 33.33333%;</td>
    </tr>
    <tr>
      <td>top-3/6</td>
      <td>top: 50%;</td>
    </tr>
    <tr>
      <td>top-4/6</td>
      <td>top: 66.66667%;</td>
    </tr>
    <tr>
      <td>top-5/6</td>
      <td>top: 83.33333%;</td>
    </tr>
    <tr>
      <td>top-full</td>
      <td>top: 100%;</td>
    </tr>
    <tr>
      <td>top-auto</td>
      <td>top: auto;</td>
    </tr>
  </tbody>
</table>

### Bottom

<br>

<table>
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>bottom-0</td>
      <td>bottom: 0;</td>
    </tr>
    <tr>
      <td>bottom-0.5</td>
      <td>bottom: 0.0625rem; &nbsp;/*&nbsp;1px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-1</td>
      <td>bottom: 0.125rem; &nbsp;/*&nbsp;2px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-1.5</td>
      <td>bottom: 0.25rem; &nbsp;/*&nbsp;4px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-2</td>
      <td>bottom: 0.375rem; &nbsp;/*&nbsp;6px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-2.5</td>
      <td>bottom: 0.5rem; &nbsp;/*&nbsp;8px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-3</td>
      <td>bottom: 0625rem; &nbsp;/*&nbsp;10px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-3.5</td>
      <td>bottom: 0.75rem; &nbsp;/*&nbsp;12px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-4</td>
      <td>bottom: 0.875rem; &nbsp;/*&nbsp;14px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-5</td>
      <td>bottom: 1rem; &nbsp;/*&nbsp;16px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-6</td>
      <td>bottom: 1.25rem; &nbsp;/*&nbsp;20px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-7</td>
      <td>bottom: 1.5rem; &nbsp;/*&nbsp;24px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-8</td>
      <td>bottom: 1.75rem; &nbsp;/*&nbsp;28px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-9</td>
      <td>bottom: 2rem; &nbsp;/*&nbsp;32px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-10</td>
      <td>bottom: 2.25rem; &nbsp;/*&nbsp;36px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-11</td>
      <td>bottom: 2.5rem; &nbsp;/*&nbsp;40px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-12</td>
      <td>bottom: 2.75rem; &nbsp;/*&nbsp;44px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-14</td>
      <td>bottom: 3rem; &nbsp;/*&nbsp;48px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-16</td>
      <td>bottom: 3.25rem; &nbsp;/*&nbsp;52px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-20</td>
      <td>bottom: 3.5rem; &nbsp;/*&nbsp;56px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-24</td>
      <td>bottom: 3.75rem; &nbsp;/*&nbsp;60px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-28</td>
      <td>bottom: 4rem; &nbsp;/*&nbsp;64px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-32</td>
      <td>bottom: 5rem; &nbsp;/*&nbsp;80px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-36</td>
      <td>bottom: 6rem; &nbsp;/*&nbsp;96px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-40</td>
      <td>bottom: 7rem; &nbsp;/*&nbsp;112px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-44</td>
      <td>bottom: 8rem; &nbsp;/*&nbsp;128px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-48</td>
      <td>bottom: 9rem; &nbsp;/*&nbsp;144px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-52</td>
      <td>bottom: 10rem; &nbsp;/*&nbsp;160px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-56</td>
      <td>bottom: 11rem; &nbsp;/*&nbsp;176px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-60</td>
      <td>bottom: 12rem; &nbsp;/*&nbsp;192px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-64</td>
      <td>bottom: 13rem; &nbsp;/*&nbsp;208px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-72</td>
      <td>bottom: 14rem; &nbsp;/*&nbsp;224px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-80</td>
      <td>bottom: 15rem; &nbsp;/*&nbsp;240px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-88</td>
      <td>bottom: 16rem; &nbsp;/*&nbsp;256px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-96</td>
      <td>bottom: 18rem; &nbsp;/*&nbsp;288px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-104</td>
      <td>bottom: 20rem; &nbsp;/*&nbsp;320px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-112</td>
      <td>bottom: 22rem; &nbsp;/*&nbsp;352px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-120</td>
      <td>bottom: 24rem; &nbsp;/*&nbsp;384px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-128</td>
      <td>bottom: 26rem; &nbsp;/*&nbsp;416px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-136</td>
      <td>bottom: 28rem; &nbsp;/*&nbsp;448px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-144</td>
      <td>bottom: 30rem; &nbsp;/*&nbsp;480px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-152</td>
      <td>bottom: 32rem; &nbsp;/*&nbsp;512px&nbsp;*/</td>
    </tr>
    <tr>
      <td>bottom-1/2</td>
      <td>bottom: 50%;</td>
    </tr>
    <tr>
      <td>bottom-1/3</td>
      <td>bottom: 33.33333%;</td>
    </tr>
    <tr>
      <td>bottom-2/3</td>
      <td>bottom: 66.66667%;</td>
    </tr>
    <tr>
      <td>bottom-1/4</td>
      <td>bottom: 25%;</td>
    </tr>
    <tr>
      <td>bottom-2/4</td>
      <td>bottom: 50%);</td>
    </tr>
    <tr>
      <td>bottom-3/4</td>
      <td>bottom: 75%;</td>
    </tr>
    <tr>
      <td>bottom-1/5</td>
      <td>bottom: 20%;</td>
    </tr>
    <tr>
      <td>bottom-2/5</td>
      <td>bottom: 40%;</td>
    </tr>
    <tr>
      <td>bottom-3/5</td>
      <td>bottom: 60%;</td>
    </tr>
    <tr>
      <td>bottom-4/5</td>
      <td>bottom: 80%;</td>
    </tr>
    <tr>
      <td>bottom-1/6</td>
      <td>bottom: 16.66667%;</td>
    </tr>
    <tr>
      <td>bottom-2/6</td>
      <td>bottom: 33.33333%;</td>
    </tr>
    <tr>
      <td>bottom-3/6</td>
      <td>bottom: 50%;</td>
    </tr>
    <tr>
      <td>bottom-4/6</td>
      <td>bottom: 66.66667%;</td>
    </tr>
    <tr>
      <td>bottom-5/6</td>
      <td>bottom: 83.33333%;</td>
    </tr>
    <tr>
      <td>bottom-full</td>
      <td>bottom: 100%;</td>
    </tr>
    <tr>
      <td>bottom-auto</td>
      <td>bottom: auto;</td>
    </tr>
  </tbody>
</table>

### Left

<br>

<table>
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>left-0</td>
      <td>left: 0;</td>
    </tr>
    <tr>
      <td>left-0.5</td>
      <td>left: 0.0625rem; &nbsp;/*&nbsp;1px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-1</td>
      <td>left: 0.125rem; &nbsp;/*&nbsp;2px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-1.5</td>
      <td>left: 0.25rem; &nbsp;/*&nbsp;4px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-2</td>
      <td>left: 0.375rem; &nbsp;/*&nbsp;6px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-2.5</td>
      <td>left: 0.5rem; &nbsp;/*&nbsp;8px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-3</td>
      <td>left: 0625rem; &nbsp;/*&nbsp;10px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-3.5</td>
      <td>left: 0.75rem; &nbsp;/*&nbsp;12px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-4</td>
      <td>left: 0.875rem; &nbsp;/*&nbsp;14px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-5</td>
      <td>left: 1rem; &nbsp;/*&nbsp;16px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-6</td>
      <td>left: 1.25rem; &nbsp;/*&nbsp;20px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-7</td>
      <td>left: 1.5rem; &nbsp;/*&nbsp;24px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-8</td>
      <td>left: 1.75rem; &nbsp;/*&nbsp;28px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-9</td>
      <td>left: 2rem; &nbsp;/*&nbsp;32px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-10</td>
      <td>left: 2.25rem; &nbsp;/*&nbsp;36px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-11</td>
      <td>left: 2.5rem; &nbsp;/*&nbsp;40px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-12</td>
      <td>left: 2.75rem; &nbsp;/*&nbsp;44px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-14</td>
      <td>left: 3rem; &nbsp;/*&nbsp;48px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-16</td>
      <td>left: 3.25rem; &nbsp;/*&nbsp;52px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-20</td>
      <td>left: 3.5rem; &nbsp;/*&nbsp;56px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-24</td>
      <td>left: 3.75rem; &nbsp;/*&nbsp;60px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-28</td>
      <td>left: 4rem; &nbsp;/*&nbsp;64px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-32</td>
      <td>left: 5rem; &nbsp;/*&nbsp;80px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-36</td>
      <td>left: 6rem; &nbsp;/*&nbsp;96px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-40</td>
      <td>left: 7rem; &nbsp;/*&nbsp;112px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-44</td>
      <td>left: 8rem; &nbsp;/*&nbsp;128px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-48</td>
      <td>left: 9rem; &nbsp;/*&nbsp;144px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-52</td>
      <td>left: 10rem; &nbsp;/*&nbsp;160px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-56</td>
      <td>left: 11rem; &nbsp;/*&nbsp;176px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-60</td>
      <td>left: 12rem; &nbsp;/*&nbsp;192px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-64</td>
      <td>left: 13rem; &nbsp;/*&nbsp;208px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-72</td>
      <td>left: 14rem; &nbsp;/*&nbsp;224px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-80</td>
      <td>left: 15rem; &nbsp;/*&nbsp;240px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-88</td>
      <td>left: 16rem; &nbsp;/*&nbsp;256px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-96</td>
      <td>left: 18rem; &nbsp;/*&nbsp;288px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-104</td>
      <td>left: 20rem; &nbsp;/*&nbsp;320px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-112</td>
      <td>left: 22rem; &nbsp;/*&nbsp;352px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-120</td>
      <td>left: 24rem; &nbsp;/*&nbsp;384px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-128</td>
      <td>left: 26rem; &nbsp;/*&nbsp;416px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-136</td>
      <td>left: 28rem; &nbsp;/*&nbsp;448px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-144</td>
      <td>left: 30rem; &nbsp;/*&nbsp;480px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-152</td>
      <td>left: 32rem; &nbsp;/*&nbsp;512px&nbsp;*/</td>
    </tr>
    <tr>
      <td>left-1/2</td>
      <td>left: 50%;</td>
    </tr>
    <tr>
      <td>left-1/3</td>
      <td>left: 33.33333%;</td>
    </tr>
    <tr>
      <td>left-2/3</td>
      <td>left: 66.66667%;</td>
    </tr>
    <tr>
      <td>left-1/4</td>
      <td>left: 25%;</td>
    </tr>
    <tr>
      <td>left-2/4</td>
      <td>left: 50%);</td>
    </tr>
    <tr>
      <td>left-3/4</td>
      <td>left: 75%;</td>
    </tr>
    <tr>
      <td>left-1/5</td>
      <td>left: 20%;</td>
    </tr>
    <tr>
      <td>left-2/5</td>
      <td>left: 40%;</td>
    </tr>
    <tr>
      <td>left-3/5</td>
      <td>left: 60%;</td>
    </tr>
    <tr>
      <td>left-4/5</td>
      <td>left: 80%;</td>
    </tr>
    <tr>
      <td>left-1/6</td>
      <td>left: 16.66667%;</td>
    </tr>
    <tr>
      <td>left-2/6</td>
      <td>left: 33.33333%;</td>
    </tr>
    <tr>
      <td>left-3/6</td>
      <td>left: 50%;</td>
    </tr>
    <tr>
      <td>left-4/6</td>
      <td>left: 66.66667%;</td>
    </tr>
    <tr>
      <td>left-5/6</td>
      <td>left: 83.33333%;</td>
    </tr>
    <tr>
      <td>left-full</td>
      <td>left: 100%;</td>
    </tr>
    <tr>
      <td>left-auto</td>
      <td>left: auto;</td>
    </tr>
  </tbody>
</table>

### Right

<br>

<table>
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
    <tr>
      <td>right-0</td>
      <td>right: 0;</td>
    </tr>
    <tr>
      <td>right-0.5</td>
      <td>right: 0.0625rem; &nbsp;/*&nbsp;1px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-1</td>
      <td>right: 0.125rem; &nbsp;/*&nbsp;2px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-1.5</td>
      <td>right: 0.25rem; &nbsp;/*&nbsp;4px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-2</td>
      <td>right: 0.375rem; &nbsp;/*&nbsp;6px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-2.5</td>
      <td>right: 0.5rem; &nbsp;/*&nbsp;8px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-3</td>
      <td>right: 0625rem; &nbsp;/*&nbsp;10px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-3.5</td>
      <td>right: 0.75rem; &nbsp;/*&nbsp;12px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-4</td>
      <td>right: 0.875rem; &nbsp;/*&nbsp;14px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-5</td>
      <td>right: 1rem; &nbsp;/*&nbsp;16px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-6</td>
      <td>right: 1.25rem; &nbsp;/*&nbsp;20px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-7</td>
      <td>right: 1.5rem; &nbsp;/*&nbsp;24px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-8</td>
      <td>right: 1.75rem; &nbsp;/*&nbsp;28px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-9</td>
      <td>right: 2rem; &nbsp;/*&nbsp;32px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-10</td>
      <td>right: 2.25rem; &nbsp;/*&nbsp;36px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-11</td>
      <td>right: 2.5rem; &nbsp;/*&nbsp;40px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-12</td>
      <td>right: 2.75rem; &nbsp;/*&nbsp;44px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-14</td>
      <td>right: 3rem; &nbsp;/*&nbsp;48px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-16</td>
      <td>right: 3.25rem; &nbsp;/*&nbsp;52px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-20</td>
      <td>right: 3.5rem; &nbsp;/*&nbsp;56px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-24</td>
      <td>right: 3.75rem; &nbsp;/*&nbsp;60px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-28</td>
      <td>right: 4rem; &nbsp;/*&nbsp;64px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-32</td>
      <td>right: 5rem; &nbsp;/*&nbsp;80px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-36</td>
      <td>right: 6rem; &nbsp;/*&nbsp;96px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-40</td>
      <td>right: 7rem; &nbsp;/*&nbsp;112px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-44</td>
      <td>right: 8rem; &nbsp;/*&nbsp;128px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-48</td>
      <td>right: 9rem; &nbsp;/*&nbsp;144px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-52</td>
      <td>right: 10rem; &nbsp;/*&nbsp;160px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-56</td>
      <td>right: 11rem; &nbsp;/*&nbsp;176px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-60</td>
      <td>right: 12rem; &nbsp;/*&nbsp;192px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-64</td>
      <td>right: 13rem; &nbsp;/*&nbsp;208px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-72</td>
      <td>right: 14rem; &nbsp;/*&nbsp;224px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-80</td>
      <td>right: 15rem; &nbsp;/*&nbsp;240px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-88</td>
      <td>right: 16rem; &nbsp;/*&nbsp;256px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-96</td>
      <td>right: 18rem; &nbsp;/*&nbsp;288px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-104</td>
      <td>right: 20rem; &nbsp;/*&nbsp;320px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-112</td>
      <td>right: 22rem; &nbsp;/*&nbsp;352px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-120</td>
      <td>right: 24rem; &nbsp;/*&nbsp;384px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-128</td>
      <td>right: 26rem; &nbsp;/*&nbsp;416px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-136</td>
      <td>right: 28rem; &nbsp;/*&nbsp;448px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-144</td>
      <td>right: 30rem; &nbsp;/*&nbsp;480px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-152</td>
      <td>right: 32rem; &nbsp;/*&nbsp;512px&nbsp;*/</td>
    </tr>
    <tr>
      <td>right-1/2</td>
      <td>right: 50%;</td>
    </tr>
    <tr>
      <td>right-1/3</td>
      <td>right: 33.33333%;</td>
    </tr>
    <tr>
      <td>right-2/3</td>
      <td>right: 66.66667%;</td>
    </tr>
    <tr>
      <td>right-1/4</td>
      <td>right: 25%;</td>
    </tr>
    <tr>
      <td>right-2/4</td>
      <td>right: 50%);</td>
    </tr>
    <tr>
      <td>right-3/4</td>
      <td>right: 75%;</td>
    </tr>
    <tr>
      <td>right-1/5</td>
      <td>right: 20%;</td>
    </tr>
    <tr>
      <td>right-2/5</td>
      <td>right: 40%;</td>
    </tr>
    <tr>
      <td>right-3/5</td>
      <td>right: 60%;</td>
    </tr>
    <tr>
      <td>right-4/5</td>
      <td>right: 80%;</td>
    </tr>
    <tr>
      <td>right-1/6</td>
      <td>right: 16.66667%;</td>
    </tr>
    <tr>
      <td>right-2/6</td>
      <td>right: 33.33333%;</td>
    </tr>
    <tr>
      <td>right-3/6</td>
      <td>right: 50%;</td>
    </tr>
    <tr>
      <td>right-4/6</td>
      <td>right: 66.66667%;</td>
    </tr>
    <tr>
      <td>right-5/6</td>
      <td>right: 83.33333%;</td>
    </tr>
    <tr>
      <td>right-full</td>
      <td>right: 100%;</td>
    </tr>
    <tr>
      <td>right-auto</td>
      <td>right: auto;</td>
    </tr>
  </tbody>
</table>

## Z-index

<table class="h-auto">
  <div class="table-head">
    <div class="font-bld">Class</div>
    <div class="font-bld">Property</div>
  </div>
  <tbody>
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
  </tbody>
</table>
