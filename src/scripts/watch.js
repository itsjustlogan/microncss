const fs = require('fs')
const chalk = require('chalk')

const { buildSass } = require('./build')
const { watcherBuilder } = require('./watcherBuilder')
const { errorText, log, logo, cwd } = require('./helpers/helper')

const grayText = chalk.gray

const doesConfigExist = () => {
  try {
    const { watch } = require(`${cwd}/microncss.config.json`)
    return watch
  } catch (e) {
    return console.error(
      errorText(
        `Fatal Error: Cannot find file "microncss.config.json" in ${cwd}`
      )
    )
  }
}

function parseDate() {
  const d = new Date()
  return d.toLocaleTimeString().toUpperCase().replace(/\./g, '')
}

const watcher = () => {
  let watching = false

  buildSass()

  const watch = doesConfigExist()

  if (watch) {
    log(logo('[microncss]'), grayText('watching...👀'))
    watch.forEach((watchDir) => {
      fs.watch(
        `${cwd}/${watchDir}`,
        { recursive: false },
        (eventType, fileName) => {
          if (watching) return
          watching = true

          const start = performance.now()

          const getDate = parseDate()

          log('')
          log(
            grayText(`${getDate}`),
            logo('[microncss]'),
            grayText(`"${fileName}" was ${eventType}d`)
          )

          watcherBuilder()

          const end = performance.now()

          log(grayText(`rebuilt in ${(end - start).toFixed(0)}ms`))

          setTimeout(() => {
            watching = false
          }, 100)
        }
      )
    })
  } else {
    console.error(errorText('Error: There are no directories to watch.'))
  }
}

exports.watcher = watcher
