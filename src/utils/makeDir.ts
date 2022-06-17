import fs from 'fs'
import util from 'util'
import { cwd } from './constants'

const mkdir = util.promisify(fs.mkdir)

const makeDir = async (dirToCreate: string): Promise<string> => {
  await mkdir(`${cwd}/${dirToCreate}`, { recursive: true })

  return dirToCreate
}

export default makeDir
