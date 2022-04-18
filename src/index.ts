import buildCLI from './modules/buildCLI.js'
import init from './modules/init.js'
import productionCLI from './modules/productionCLI.js'
import watcher from './modules/watcher.js'
import { errorText, log, logo, whiteText } from './utils/constants.js'

const executeMicroncss = () => {
  const option = process.argv[2]

  if (option === 'init' || option === '--init') {
    init()
    buildCLI()
  } else if (
    option === '--build-prod' ||
    option === 'build' ||
    option === '--build' ||
    option === '--production' ||
    option === 'production' ||
    option === '--prod' ||
    option === 'prod'
  ) {
    productionCLI()
  } else if (option === '--watch' || option === 'watch') {
    watcher()
  } else if (option === undefined || option === null) {
    buildCLI()
  } else {
    log(
      errorText(`Ivalid option ${option}!`),
      whiteText('\n Available options: '),
      logo('init, build, or watch.')
    )
  }
}

executeMicroncss()
