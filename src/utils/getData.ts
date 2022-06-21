import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const cwd = process.cwd()
const log = console.log
const errorText = chalk.bgRed.white.bold

// get the configuration file content
export async function getConfigFile(configSetting: number) {
  try {
    const configFile = await import(`${cwd}/microncss.config.js`)
    const configContent: any = Object.values(configFile.default)
    return configContent[configSetting]
  } catch (e) {
    log(
      errorText(`Fatal: Cannot find file "microncss.config.js" in ${cwd}\n`),
      e.message
    )
  }
}

// get the path to package directory
export function getPackageDir(): string {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  return __dirname
}

// get the current time and format it
export function parseDate() {
  const d = new Date()
  return d.toLocaleTimeString().toUpperCase().replace(/\./g, '')
}
