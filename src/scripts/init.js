const fs = require('fs')
const { cwd, log, errorText, grayText } = require('./helpers/helper')
const configContent = require('../config/microncss.config.json')

const microncssInit = () => {
  fs.writeFile(
    `${cwd}/microncss.config.json`,
    JSON.stringify(configContent),
    (err) => {
      if (err) {
        console.error(errorText("Error: couldn't create config file."))
        log('')
        console.error(err.message)
      } else {
        log(grayText('Success! ✅'))
        log('')
      }
    }
  )
}

exports.microncssInit = microncssInit
