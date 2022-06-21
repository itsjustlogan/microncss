import createConfig from './modules/createConfig'
import buildOption from './modules/build'
import productionOption from './modules/production'
import watchOption from './modules/watch'
import { errorText, log, logo, whiteText } from './utils/constants'

// start of the program
function executeMicroncss(featureFlag?: string): string {
  const option = featureFlag

  switch (option) {
    // initializer
    case 'init':
    case '--init':
      createConfig()
      buildOption()
      return 'initialized'

    // production build
    case 'build':
    case '--build':
    case '--build-prod':
    case 'prod':
    case '--prod':
    case 'production':
    case '--production':
      productionOption()
      return 'built production'

    // watcher
    case 'watch':
    case '--watch':
      watchOption()
      return 'watching'

    // catch invalid options
    default:
      if (option === undefined || option === null || option === '') {
        buildOption()
        return 'default rebuilding'
      }
      log(
        errorText(`Ivalid option ${option}!`),
        whiteText('\n Available options: '),
        logo('init, build, or watch.')
      )
      return 'invalid option'
  }
}

executeMicroncss(process.argv[2])

export default executeMicroncss
