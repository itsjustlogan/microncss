#! /usr/bin/env node

const { executeBuild } = require('./builder')
const { executeProduction } = require('./cleaner')
const { microncssInit } = require('./scripts/init')
const { executeWatcher } = require('./watcher')

const executeMicroncss = () => {
  const option = process.argv[2]

  if (option === 'init' || option === '--init') {
    microncssInit()
  } else if (option === '--build-prod') {
    executeProduction()
  } else if (option === '--watch') {
    executeWatcher()
  } else {
    executeBuild()
  }
}

executeMicroncss()
