const sass = require('sass')
const fs = require('fs')

const cwd = process.cwd()

const buildSass = () => {
  const start = performance.now()

  console.log('Building CSS... 🛠️')

  const output = sass.compile('./src/scss/micron.scss')
  fs.writeFile(`${cwd}/src/micron.css`, output.css, () => true)

  const end = performance.now()

  console.log(`Done in ${(end - start).toFixed(2)}ms ✅`)
}

exports.buildSass = buildSass
