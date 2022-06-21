import { grayText, log, whiteText } from '../utils/constants'
import StyleBuilder from './styleBuilder'

export default async function buildOption() {
  const start = performance.now()

  // create new StyleBuilder instance
  const defaultBuilder = new StyleBuilder()

  log(grayText('building styles...'))

  await defaultBuilder.builder()

  const end = performance.now()

  log(whiteText(`\ndone in ${grayText(`${(end - start).toFixed(0)}ms.`)}\n`))
}
