import { grayText, log } from '../utils/constants.js'
import productionBuild from './productionBuild.js'

const productionCLI = () => {
  log(grayText('🧽 cleaning css...'))

  productionBuild()
}

export default productionCLI
