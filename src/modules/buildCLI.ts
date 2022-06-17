import { grayText, log, whiteText } from '../utils/constants'
// import buildStyles from './buildStyles'
import StyleBuilder from './styleBuilder'

async function buildCLI() {
  const start = performance.now()

  // create new StyleBuilder instance
  const defaultBuilder = new StyleBuilder()

  log(grayText('building styles...'))

  await defaultBuilder.builder('', '')
  // await buildStyles()

  const end = performance.now()

  log(whiteText(`\ndone in ${grayText(`${(end - start).toFixed(0)}ms.`)}\n`))
}

export default buildCLI
