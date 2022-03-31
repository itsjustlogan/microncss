#! /usr/bin/env node

const { cleanCss } = require('./scripts/clean')
const { log, whiteText, grayText } = require('./scripts/helpers/helper')

const executeProduction = () => {
  const start = performance.now()

  log(grayText('🧽 cleaning css...'))

  cleanCss()

  const end = performance.now()
  log('')
  log(whiteText(`done in ${grayText(`${(end - start).toFixed(0)}ms`)} `))
  log('')
}

exports.executeProduction = executeProduction
