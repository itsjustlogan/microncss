# Styles

## Base

### Reset

Basic CSS reset

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
```

### Default styling

```css
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

<style>
  td {
    padding-block: 1.25em;
  }
</style>
