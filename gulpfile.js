const { src, dest } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const gulpPurgecss = require('gulp-purgecss')

const cwd = process.cwd()
const { output, purge } = require(`${cwd}/microncss.config.json`)

const path = `${cwd}/src`

let outputDir
let purgeVal

const checkConfig = () => {
  // eslint-disable-next-line operator-linebreak
  outputDir =
    output === undefined || output.length < 4
      ? (outputDir = path)
      : (outputDir = output)
  return outputDir
}
checkConfig()

const defaultPurge = () => {
  purgeVal = purge === undefined ? (purgeVal = false) : (purgeVal = purge)
  return purgeVal
}
defaultPurge()

function buildSass() {
  return src('./src/scss/micron.scss').pipe(sass()).pipe(dest(outputDir))
}

function purgeSass() {
  return src('./src/scss/micron.scss')
    .pipe(sass())
    .pipe(
      gulpPurgecss({
        content: [`${cwd}/public/*.html`, `${cwd}/*.html`],
      })
    )
    .pipe(dest(outputDir))
}

const checkProduction = async () => {
  if (purgeVal) {
    await purgeSass()
  } else {
    buildSass()
  }
  console.log('Done ✅')
}

exports.default = checkProduction
