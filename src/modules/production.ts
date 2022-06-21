import { grayText, log } from '../utils/constants'
import StyleBuilder from './styleBuilder'

export default function productionOption() {
  log(grayText('🧽 cleaning css...'))

  const productionBuilder = new StyleBuilder('production', 'done in')

  productionBuilder.builder()
}
