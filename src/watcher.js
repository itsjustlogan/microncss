#! /usr/bin/env node

const { watcher } = require('./scripts/watch')

const executeWatcher = () => {
  watcher()
}

exports.executeWatcher = executeWatcher
