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
  font-size: calc(0.5em + 1vw);
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

<style>
  table {
    height: 350px;
    overflow-y: scroll;
  }
  td {
    border: none;
    width: auto;
    padding-left: 1em;
    padding-right: 12rem;
  }

  .h-auto {
    height: auto;
  }
</style>
