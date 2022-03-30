const postcss = require('postcss')
const cssnano = require('cssnano')
const preset = require('cssnano-preset-default')
const fs = require('fs')

const cwd = process.cwd()

function minify() {
  fs.readFile('micron.css', (err, css) => {
    postcss([cssnano({ preset })])
      .process(css, { from: 'micron.css', to: `${cwd}/src/micron.css` })
      .then((result) => {
        fs.writeFile(`${cwd}/src/micron.css`, result.css, () => true)
        if (result.map) {
          fs.writeFile(
            `${cwd}/src/micron.css.map`,
            result.map.toString(),
            () => true
          )
        }
      })
    if (err) {
      console.log(`error: ${err.message}`)
    }
    console.log('Success!')
  })
}

exports.minify = minify
