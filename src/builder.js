#! /usr/bin/env node

const { buildSass } = require('./scripts/build')
const { whiteText, log, grayText } = require('./scripts/helpers/helper')

const executeBuild = () => {
  const start = performance.now()

  log(grayText('building styles...'))

  buildSass()

  const end = performance.now()

  log('')
  log(whiteText(`done in ${grayText(`${(end - start).toFixed(0)}ms.`)}`))
  log('')
}

exports.executeBuild = executeBuild
