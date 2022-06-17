import fs from 'fs'
import path from 'path'
import util from 'util'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import cssnano from 'cssnano'
import preset from 'cssnano-preset-default'
import purgecss from '@fullhuman/postcss-purgecss'
import compileSass from '../utils/compileSass'
import getPackageDir from '../utils/getPackageDir'
import makeDir from '../utils/makeDir'
import writeData from '../utils/writeData'
import writeLocal from '../utils/writeLocal'
import { cwd, grayText, log, whiteText, thinGrayText } from '../utils/constants'
import microncssExtractor from '../utils/microncssExtractor'
import getConfigFile from '../utils/getConfigFile'

class StyleBuilder {
  template: Array<string>

  templateArray: Array<string>

  private _readFile = util.promisify(fs.readFile)

  dirToWrite: string

  start: number

  end: number

  async builder(builderOption: string, msg: string) {
    this.template = await getConfigFile(1)
    this.templateArray = this.template?.map((i: string) => `${cwd}/${i}`)

    switch (builderOption) {
      case 'production':
        // calculate start of execution
        this.start = performance.now()

        postcss([
          autoprefixer,
          purgecss({
            content: this.templateArray,
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
            await this._readFile(
              path.resolve(getPackageDir(), './packageMicron.css')
            ),
            {
              from: path.resolve(getPackageDir(), './packageMicron.css'),
              to: `${cwd}/src/css/micron.css`,
            }
          )
          .then((result) => {
            fs.writeFile(`${cwd}/src/css/micron.css`, result.css, () => true)
          })
        // calculate end of execution
        this.end = performance.now()
        log(
          whiteText(
            `\n${msg} ${grayText(`${(this.end - this.start).toFixed(0)}ms`)} \n`
          )
        )

        break

      case 'watch':
        // calculate start of execution
        this.start = performance.now()

        postcss([
          purgecss({
            content: this.templateArray,
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
            await this._readFile(
              path.resolve(getPackageDir(), './packageMicron.css')
            ),
            {
              from: path.resolve(getPackageDir(), './packageMicron.css'),
              to: `${cwd}/src/css/micron.css`,
            }
          )
          .then((result) => {
            fs.writeFile(`${cwd}/src/css/micron.css`, result.css, () => true)
          })

        this.end = performance.now()
        log(thinGrayText(`${msg} ${(this.end - this.start).toFixed(0)}ms`))

        break
      default:
        // build all styles no purging.
        this.dirToWrite = await makeDir('src/css')
        writeData(compileSass().css, this.dirToWrite, 'micron.css')
        writeLocal(
          compileSass().css,
          path.resolve(getPackageDir(), './'),
          'packageMicron.css'
        )
        break
    }
  }
}

export default StyleBuilder
