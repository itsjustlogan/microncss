const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const cssnano = require('cssnano')
const preset = require('cssnano-preset-default')
const purgecss = require('@fullhuman/postcss-purgecss')
const fs = require('fs')

const cwd = process.cwd()

const cleanCss = () => {
  fs.readFile(`${cwd}/src/micron.css`, (err, css) => {
    postcss([
      autoprefixer,
      purgecss({
        content: [
          `${cwd}/*.html`,
          `${cwd}/public/*.html`,
          `${cwd}/src/*.html`,
          `${cwd}/src/**/*.html`,
          `${cwd}/**/*.html`,
        ],
      }),
      cssnano({ preset }),
    ])
      .process(css, {
        from: `${cwd}/src/micron.css`,
        to: `${cwd}/src/micron.css`,
      })
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
  })
}

exports.cleanCss = cleanCss
