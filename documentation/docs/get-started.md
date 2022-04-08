# Get Started

## Installation

To get started you can install microncss either through :

**NPM**

```bash
npm install microncss
```

**CDN** _\*not recommeded for production\*_ :

```html
<link rel="stylesheet" href="unpkg.com/microncss/v0.2.0" />
```

### Initialize microncss

```bash
npx microncss init
```

This will build the styles & create a microncss.config.json file in your root directory.

### Use microncss styles

To begin using microncss utility classes, include the generated stylesheet in your html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/micron.css" />
  </head>
  <body>
    <h1 class="font-4xl text-blue-300 pt-2">hello world!</h1>
  </body>
</html>
```

## Build for production

The css file that microncss generates is quite large and is not initially optimized for production.
To build a production ready file, run:

```bash
npx microncss build
```

This will remove unused styles, add prefixes, and minify the css file makking it ready for production.

## Watcher

### Modify config file

```json
{
  "watch": [""]
}
```

The config file consists of a variable "watch" that takes an array of directories as strings. The file starts with an empty string, telling the watcher to watch the root of the folder initially.

```json
{
  "watch": ["", "src/views", "src/components"]
}
```

Start the watcher by running

```bash
npx microncss watch
```

## Caveats

If you've using the watcher, or have used the watcher, it removes unused styles, and rebuilds the file with only the syles you're using whenever the referenced files are modified.

However, this means once you stop watching, if you add styles that werent used while watching they will not work. This is because the css file only has the styles in use at the time of watching.

The same is true if you build a production version of the styles prematurely. Adding new styles that haven't been used before will not work.

To get new styles to work again, either begin watching again, or simply rebuild the micron.css file to add back all the styles. To rebuild micron.css file run:

```bash
npx microncss
```

or

```bash
npx micron
```

<style scoped>
</style>
