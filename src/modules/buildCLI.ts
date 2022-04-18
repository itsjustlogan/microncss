import { grayText, log, whiteText } from '../utils/constants.js'
import buildStyles from './buildStyles.js'

const buildCLI = async () => {
  const start = performance.now()

  log(grayText('building styles...'))

  await buildStyles()

  const end = performance.now()

  log(whiteText(`\ndone in ${grayText(`${(end - start).toFixed(0)}ms.`)}\n`))
}

export default buildCLI
