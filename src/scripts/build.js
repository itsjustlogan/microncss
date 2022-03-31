const sass = require('sass')
const fs = require('fs')
const { cwd, log } = require('./helpers/helper')

const buildSass = () => {
  fs.mkdir(`${cwd}/src`, (err) => {
    if (err) {
      log('')
    }
  })

  const output = sass.compile('./node_modules/microncss/src/scss/micron.scss')
  fs.writeFile(`${cwd}/src/micron.css`, output.css, () => true)

  fs.writeFile(
    `${cwd}/node_modules/microncss/reference.css`,
    output.css,
    () => true
  )
}

exports.buildSass = buildSass
