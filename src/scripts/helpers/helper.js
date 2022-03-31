const chalk = require('chalk')

module.exports = {
  log: console.log,
  grayText: chalk.bold.gray,
  whiteText: chalk.bold.white,
  errorText: chalk.bgRed.white.bold,
  logo: chalk.bold.hex('#d5a000'),
  cwd: process.cwd(),
}
