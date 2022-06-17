import fs from 'fs'
import path from 'path'
import util from 'util'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import cssnano from 'cssnano'
import preset from 'cssnano-preset-default'
import purgecss from '@fullhuman/postcss-purgecss'
import { cwd, grayText, log, whiteText } from '../utils/constants'
import getPackageDir from '../utils/getPackageDir'
import microncssExtractor from '../utils/microncssExtractor'
import getConfigFile from '../utils/getConfigFile'

const readFile = util.promisify(fs.readFile)

const productionBuild = async () => {
  const template = await getConfigFile(1)

  const templateArray = template?.map((i: string) => `${cwd}/${i}`)

  const start = performance.now()
  postcss([
    autoprefixer,
    purgecss({
      content: templateArray,
      extractors: [
        {
          extractor: microncssExtractor,
          extensions: ['html', 'vue', 'js', 'ts', 'jsx', 'tsx'],
        },
      ],
    }),
    cssnano({ preset }),
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
  log(whiteText(`\ndone in ${grayText(`${(end - start).toFixed(0)}ms`)} \n`))
}

export default productionBuild
