import fs from 'fs'
import path from 'path'
import util from 'util'
import postcss from 'postcss'
import purgecss from '@fullhuman/postcss-purgecss'
import { cwd, log, thinGrayText } from '../utils/constants.js'
import getPackageDir from '../utils/getPackageDir.js'
import microncssExtractor from '../utils/microncssExtractor.js'
import getConfigFile from '../utils/getConfigFile.js'

const readFile = util.promisify(fs.readFile)

const watcherBuilder = async () => {
  const template = await getConfigFile(1)

  const templateArray = template.map((i: string) => `${cwd}/${i}`)

  const start = performance.now()
  postcss([
    purgecss({
      content: templateArray,
      extractors: [
        {
          extractor: microncssExtractor,
          extensions: ['html', 'vue', 'js', 'ts', 'jsx', 'tsx'],
        },
      ],
    }),
  ])
    .process(
      await readFile(path.resolve(getPackageDir(), './packageMicron.css')),
      {
        from: path.resolve(getPackageDir(), './packageMicron.css'),
        to: `${cwd}/src/css/micron.css`,
      }
    )
    .then((result) => {
      fs.writeFile(`${cwd}/src/css/micron.css`, result.css, () => true)
    })
  const end = performance.now()
  log(thinGrayText(`rebuilt in ${(end - start).toFixed(0)}ms`))
}

export default watcherBuilder
