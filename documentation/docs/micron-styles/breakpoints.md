# Breakpoints

The following are the breakpoints used to apply certain styles at different screen sizes.

```scss
$breakpoints: (
  'xs': 375px,
  'sm': 425px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1440px,
);
```

Simply append the breakpoint size "xs, sm, md, lg, or xl" to the front of any class using a colon ":" character to style each state accordingly.

### **Example**

```html
<h1 class="font-2xl xl:font-6xl">Hello World</h1>
<!--
  xl:font-6xl simply means at screen sizes 1440px and up,
 set the font size to be font-6xl(6rem). 
 Or in other words:
 @media(min-width: 1440px) {
   h1 {
    font-size: 6rem;
   }
 }
 -->
```
