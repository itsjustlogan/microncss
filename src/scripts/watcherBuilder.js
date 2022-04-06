const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const fs = require('fs')
const { cwd } = require('./helpers/helper')

const watcherBuilder = () => {
  fs.readFile(`${cwd}/node_modules/microncss/reference.css`, (err, css) => {
    postcss([
      autoprefixer,
      purgecss({
        content: [
          `${cwd}/*.html`,
          `${cwd}/**/*.html`,
          `${cwd}/**/**/*.html`,
          `${cwd}/**/*.vue`,
          `${cwd}/**/**/*.vue`,
          `${cwd}/**/*.jsx`,
          `${cwd}/**/**/*.jsx`,
          `${cwd}/**/*.tsx`,
          `${cwd}/**/**/*.tsx`,
        ],
      }),
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
