#!/usr/bin/env node

const { writeFileSync } = require('fs')
const { exec } = require('child_process')
const configContent = require('./config/microncss.config.json')

const path = process.cwd()
writeFileSync(`${path}/microncss.config.json`, JSON.stringify(configContent))

const { purge } = require(`${path}/microncss.config.json`)

exec('npx gulp', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`${stdout}`)
})

const consoleMessage = () => {
  if (purge) {
    console.log('Purging CSS... 🔥')
  } else {
    console.log('Building CSS... 🛠️')
  }
}
consoleMessage()
