import fs from 'fs'
import util from 'util'
import path from 'path'
import getPackageDir from './getPackageDir'

const readFile = util.promisify(fs.readFile)

const readData = async (sourceFile: string) => {
  const dataRead = await readFile(path.resolve(getPackageDir(), sourceFile))
  return dataRead
}

export default readData
