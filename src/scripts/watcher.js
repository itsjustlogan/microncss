const fs = require('fs')
const { buildSass } = require('./build')
const { cleanCss } = require('./purge')

const cwd = process.cwd()

function parseDate() {
  const d = new Date()
  return d.toTimeString()
}

const watcher = () => {
  let watching = false

  console.log('[microncss] watching...👀')

  fs.watch(`${cwd}/public`, { recursive: false }, (eventType, fileName) => {
    if (watching) return
    watching = true

    const getDate = parseDate()

    console.log(`[microncss] ${getDate} "${fileName}" was modified!`)
    console.log(`The type of change was: "${eventType}.`)

    buildSass()
    cleanCss()

    setTimeout(() => {
      watching = false
    }, 100)
  })
}

exports.watcher = watcher
