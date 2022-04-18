import path from 'path'
import { fileURLToPath } from 'url'

const getPackageDir = (): string => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  return __dirname
}

export default getPackageDir
