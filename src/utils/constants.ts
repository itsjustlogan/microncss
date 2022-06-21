import chalk from 'chalk'
import { getPackageDir } from './getData'

export const cwd = process.cwd()
export const packageDir = getPackageDir()
export const sassFile = './scss/micron.scss'
export const log = console.log
export const grayText = chalk.bold.gray
export const thinGrayText = chalk.gray
export const whiteText = chalk.bold.white
export const errorText = chalk.bgRed.white.bold
// export const logo = chalk.bold.hex('#32acdc')

// use this style for logo when testing. chalk hex auto fails tests
export const logo = chalk.bold.blueBright
