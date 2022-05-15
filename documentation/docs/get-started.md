# Get Started

## Requirements

Node version 16 or higher is required to run this.

package.json must also indicate type module to run.

```json
"type": "module",
```

## Installation

To get started, install microncss.

**NPM**

```bash
npm install microncss --save-dev
```

**CDN** _\*not recommeded for production\*_ :

```html
<link rel="stylesheet" href="https://unpkg.com/microncss@latest" />
```

### Initialize microncss

```bash
npx microncss init
```

This will build the styles & create a microncss.config.js file in your root directory.

### Use microncss styles

To begin using microncss utility classes, include the generated stylesheet in your html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/css/micron.css" />
  </head>
  <body>
    <h1 class="font-4xl text-center pt-4">hello world!</h1>
  </body>
</html>
```

## Modify config file

```js
export default {
  watch: ['', 'src'],
  templates: ['*.html'],
}
```

The config file consists of two(2) properties. "watch" and "templates"
"templates" takes an array of your templates as strings.

## Build for production

### Important

In the microncss.config.js file you will find the templates property.

```js
templates: ['**/*.vue', '**/**/*.vue']
```

This array refers to the templates where you have written your html and microncss styles.
You will need to populate the array with where to find the microncss styles you have written before you build for production.
If you don't populate this field with the location of your templates, when you build, all the
styles you used will be purged and not included in the production build file.

### Generate production ready file

The css file that microncss generates is quite large and is not optimized for production.
To build a production ready file, run:

```bash
npx microncss build
```

This will remove unused styles, add prefixes, and minify the css file.

## Watcher

In the microncss.config.js file you will see the watch property. The "watch" property takes an array
of directories as strings. It starts with an empty string, telling the watcher to watch the root of the folder initially.

```js
export default {
  watch: ['', 'src/components'],
  templates: ['**/*.vue'],
}
```

Be sure to populate the templates with your templates as the watcher actively purges styles as you write and save your file.

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
