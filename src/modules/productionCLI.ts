import { grayText, log } from '../utils/constants'
// import productionBuild from './productionBuild'
import StyleBuilder from './styleBuilder'

function productionCLI() {
  log(grayText('🧽 cleaning css...'))

  const prodBuild = new StyleBuilder()

  prodBuild.builder('production', 'done in')

  // productionBuild()
}

export default productionCLI
