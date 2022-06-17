import buildCLI from './modules/buildCLI'
import init from './modules/init'
import productionCLI from './modules/productionCLI'
import watcher from './modules/watcher'
import { errorText, log, logo, whiteText } from './utils/constants'

// start of the program
function executeMicroncss(featureFlag?: string): string {
  const option = featureFlag

  switch (option) {
    // initializer
    case 'init':
    case '--init':
      init()
      buildCLI()
      return 'initialized'

    // production build
    case 'build':
    case '--build':
    case '--build-prod':
    case 'prod':
    case '--prod':
    case 'production':
    case '--production':
      productionCLI()
      return 'built production'

    // watcher
    case 'watch':
    case '--watch':
      watcher()
      return 'watching'

    // catch invalid options
    default:
      if (option === undefined || option === null || option === '') {
        buildCLI()
        return 'default rebuilding'
      }
      log(
        errorText(`Ivalid option ${option}!`),
        whiteText('\n Available options: '),
        logo('init, build, or watch.')
      )
      return 'invalid option'
  }

  // if (option === 'init' || option === '--init') {
  //   init()
  //   buildCLI()
  // } else if (
  //   option === '--build-prod' ||
  //   option === 'build' ||
  //   option === '--build' ||
  //   option === '--production' ||
  //   option === 'production' ||
  //   option === '--prod' ||
  //   option === 'prod'
  // ) {
  //   productionCLI()
  // } else if (option === '--watch' || option === 'watch') {
  //   watcher()
  // } else if (option === undefined || option === null) {
  //   buildCLI()
  // } else {
  //   log(
  //     errorText(`Ivalid option ${option}!`),
  //     whiteText('\n Available options: '),
  //     logo('init, build, or watch.')
  //   )
  // }
}

executeMicroncss(process.argv[2])

export default executeMicroncss
