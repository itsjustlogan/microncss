import sass from 'sass'
import path from 'path'
import getPackageDir from './getPackageDir'
import { sassFile } from './constants'

const compileSass = (): sass.CompileResult => {
  const output = sass.compile(path.resolve(getPackageDir(), sassFile))
  return output
}

export default compileSass
