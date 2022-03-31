const sass = require('sass')
const fs = require('fs')
const { cwd } = require('./helpers/helper')

const buildSass = () => {
  const output = sass.compile('./src/scss/micron.scss')
  fs.writeFile(`${cwd}/src/micron.css`, output.css, () => true)

  fs.writeFile('reference.css', output.css, () => true)
}

exports.buildSass = buildSass
