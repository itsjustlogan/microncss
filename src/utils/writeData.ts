import fs from 'fs'
import { cwd } from './constants'

const writeData = (
  data: Buffer | string,
  pathToWrite: string,
  filename: string
): void => {
  fs.writeFile(`${cwd}/${pathToWrite}/${filename}`, data, () => true)
}

export default writeData
