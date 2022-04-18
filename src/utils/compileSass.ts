import sass from 'sass'
import path from 'path'
import getPackageDir from './getPackageDir.js'
import { sassFile } from './constants.js'

const compileSass = (): sass.CompileResult => {
  const output = sass.compile(path.resolve(getPackageDir(), sassFile))
  return output
}

export default compileSass
