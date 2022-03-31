const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const cssnano = require('cssnano')
const preset = require('cssnano-preset-default')
const purgecss = require('@fullhuman/postcss-purgecss')
const fs = require('fs')
const { cwd } = require('./helpers/helper')

const watcherBuilder = () => {
  fs.readFile('reference.css', (err, css) => {
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
        from: 'reference.css',
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

exports.watcherBuilder = watcherBuilder
