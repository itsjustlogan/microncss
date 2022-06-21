import fs from 'fs'
import { cwd, errorText, grayText, log, logo } from '../utils/constants'
import { readData } from '../utils/fileSystem'

const microncssConfig = await readData('./config/microncss.config.js')

export default function createConfig() {
  fs.writeFile(`${cwd}/microncss.config.js`, microncssConfig, (err) => {
    if (err) {
      console.error(errorText("Error: couldn't create config file.\n"))
      console.error(err.message)
    } else {
      log(grayText('Success! ✅\n'))
      log(grayText(`Created config file: ${logo('microncss.config.js')}\n`))
    }
  })
}
