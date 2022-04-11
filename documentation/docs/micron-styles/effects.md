# Effects & Animations

## Effects

### Transition

<table class="h-auto">
<tr>
<td>transition-1</td>
<td>transition: 0.15s ease-in-out;</td>
</tr>
<tr>
<td>transition-2</td>
<td>transition: 0.2s ease-in-out;</td>
</tr>
<tr>
<td>transition-3</td>
<td>transition: 0.3s ease-in-out;</td>
</tr>
<tr>
<td>transition-4</td>
<td>transition: 0.4s ease-in-out;</td>
</tr>
<tr>
<td>transition-5</td>
<td>transition: 0.5s ease-in-out;</td>
</tr>
</table>

#### Usage

```html
<p class="hover:text-blue-100 transition-2">Change to blue</p>
```

### Opacity

<table>
<tr>
<td>o-10</td>
<td>opacity: 0.1;</td>
</tr>
<tr>
<td>o-20</td>
<td>opacity: 0.2;</td>
</tr>
<tr>
<td>o-30</td>
<td>opacity: 0.3;</td>
</tr>
<tr>
<td>o-40</td>
<td>opacity: 0.4;</td>
</tr>
<tr>
<td>o-50</td>
<td>opacity: 0.5;</td>
</tr>
<tr>
<td>o-60</td>
<td>opacity: 0.6;</td>
</tr>
<tr>
<td>o-70</td>
<td>opacity: 0.7;</td>
</tr>
<tr>
<td>o-80</td>
<td>opacity: 0.8;</td>
</tr>
<tr>
<td>o-90</td>
<td>opacity: 0.9;</td>
</tr>
<tr>
<td>o-100</td>
<td>opacity: 1.0;</td>
</tr>
</table>

#### Usage

```html
<div
  class="bg-center bg-no-repeat bg-cover o-90"
  style="background-image:
url('/src/assets/awesomebgimage.jpg;')"
></div>
```

### Scale

<table class="h-auto">
<tr>
<td>scale-0</td>
<td>transform: scale(0);</td>
</tr>
<tr>
<td>scale-50</td>
<td>transform: scale(0.5);</td>
</tr>
<tr>
<td>scale-75</td>
<td>transform: scale(0.75);</td>
</tr>
<tr>
<td>scale-90</td>
<td>transform: scale(0.9);</td>
</tr>
<tr>
<td>scale-100</td>
<td>transform: scale(1);</td>
</tr>
<tr>
<td>scale-110</td>
<td>transform: scale(1.1);</td>
</tr>
<tr>
<td>scale-120</td>
<td>transform: scale(1.2);</td>
</tr>
<tr>
<td>scale-150</td>
<td>transform: scale(1.5);</td>
</tr>
</table>

#### Usage

```html
<button class="hover:scale-150">Reset</button>
```

### Scale X

<table class="h-auto">
<tr>
<td>scale-x-0</td>
<td>transform: scale(0);</td>
</tr>
<tr>
<td>scale-x-50</td>
<td>transform: scale(0.5);</td>
</tr>
<tr>
<td>scale-x-75</td>
<td>transform: scale(0.75);</td>
</tr>
<tr>
<td>scale-x-90</td>
<td>transform: scale(0.9);</td>
</tr>
<tr>
<td>scale-x-100</td>
<td>transform: scale(1);</td>
</tr>
<tr>
<td>scale-x-110</td>
<td>transform: scale(1.1);</td>
</tr>
<tr>
<td>scale-x-120</td>
<td>transform: scale(1.2);</td>
</tr>
<tr>
<td>scale-x-150</td>
<td>transform: scale(1.5);</td>
</tr>
</table>

### Scale Y

<table class="h-auto">
<tr>
<td>scale-y-0</td>
<td>transform: scale(0);</td>
</tr>
<tr>
<td>scale-y-50</td>
<td>transform: scale(0.5);</td>
</tr>
<tr>
<td>scale-y-75</td>
<td>transform: scale(0.75);</td>
</tr>
<tr>
<td>scale-y-90</td>
<td>transform: scale(0.9);</td>
</tr>
<tr>
<td>scale-y-100</td>
<td>transform: scale(1);</td>
</tr>
<tr>
<td>scale-y-110</td>
<td>transform: scale(1.1);</td>
</tr>
<tr>
<td>scale-y-120</td>
<td>transform: scale(1.2);</td>
</tr>
<tr>
<td>scale-y-150</td>
<td>transform: scale(1.5);</td>
</tr>
</table>

## Animations

Animations are subjective, and that is why there are only two. The two included are considered to be "general purpose". Use as you wish.

### Fade

<table class="h-auto">
<tr>
<td>fade-1</td>
<td>animation: fadein 0.15s ease-in;</td>
</tr>
<tr>
<td>fade-2</td>
<td>animation: fadein 0.2s ease-in;</td>
</tr>
<tr>
<td>fade-3</td>
<td>animation: fadein 0.3s ease-in;</td>
</tr>
<tr>
<td>fade-4</td>
<td>animation: fadein 0.4s ease-in;</td>
</tr>
<tr>
<td>fade-5</td>
<td>animation: fadein 0.5s ease-in;</td>
</tr>
</table>

```css
@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
```

### Bounce Fade

<table>
<tr>
<td>bounce-fade-1</td>
<td>animation: bouncefadein 0.15s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-2</td>
<td>animation: bouncefadein 0.2s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-3</td>
<td>animation: bouncefadein 0.3s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-4</td>
<td>animation: bouncefadein 0.4s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-5</td>
<td>animation: bouncefadein 0.5s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-1</td>
<td>animation: bouncefadein 0.15s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-2</td>
<td>animation: bouncefadein 0.2s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-3</td>
<td>animation: bouncefadein 0.3s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-4</td>
<td>animation: bouncefadein 0.4s ease-in;</td>
</tr>
<tr>
<td>bounce-fade-5</td>
<td>animation: bouncefadein 0.5s ease-in;</td>
</tr>
</table>

```css
@keyframes bouncefadein {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```
