# Base Styles

## Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

:root {
  font-size: calc(0.5em + 1vw);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
