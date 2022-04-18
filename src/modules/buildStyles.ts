import path from 'path'
import compileSass from '../utils/compileSass'
import getPackageDir from '../utils/getPackageDir'
import makeDir from '../utils/makeDir'
import writeData from '../utils/writeData'
import writeLocal from '../utils/writeLocal'

const buildStyles = async () => {
  const dirToWrite = await makeDir('src/css')
  writeData(compileSass().css, dirToWrite, 'micron.css')
  writeLocal(
    compileSass().css,
    path.resolve(getPackageDir(), './'),
    'packageMicron.css'
  )
}

export default buildStyles
