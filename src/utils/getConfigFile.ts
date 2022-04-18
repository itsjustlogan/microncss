import { cwd, log, errorText } from './constants.js'

const getConfigFile = async (configSetting: number) => {
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

export default getConfigFile
