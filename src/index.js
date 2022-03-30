const { buildSass } = require('./scripts/build')
const { cleanCss } = require('./scripts/clean')
const { watcher } = require('./scripts/watcher')

const build = () => {
  const start = performance.now()

  console.log('Building CSS... 🛠️')

  buildSass()

  const end = performance.now()
  console.log(`Done in ${(end - start).toFixed(2)}ms ✅`)
}

const clean = () => {
  const start = performance.now()

  console.log('Cleaning CSS... 🧽')

  cleanCss()

  const end = performance.now()
  console.log(`⚡ Done in ${(end - start).toFixed(2)}ms`)
}

const watch = () => {
  watcher()
}

// build()
// clean()
watch()
