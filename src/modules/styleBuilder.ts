import fs from 'fs'
import path from 'path'
import util from 'util'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import cssnano from 'cssnano'
import preset from 'cssnano-preset-default'
import purgecss from '@fullhuman/postcss-purgecss'
import {
  compileSass,
  makeDir,
  writeData,
  writeLocal,
} from '../utils/fileSystem'
import { getPackageDir, getConfigFile } from '../utils/getData'
import { cwd, grayText, log, whiteText, thinGrayText } from '../utils/constants'
import microncssExtractor from '../utils/microncssExtractor'

class StyleBuilder {
  private _readFile = util.promisify(fs.readFile)

  template: Array<string>

  templateArray: Array<string>

  builderOption: string

  msg: string

  dirToWrite: string

  start: number

  end: number

  constructor(builderOption?: string, msg?: string) {
    this.builderOption = builderOption
    this.msg = msg
  }

  async builder() {
    this.template = await getConfigFile(1)
    this.templateArray = this.template?.map((i: string) => `${cwd}/${i}`)

    switch (this.builderOption) {
      case 'production':
        // calculate start time of execution
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
            `\n${this.msg} ${grayText(
              `${(this.end - this.start).toFixed(0)}ms`
            )} \n`
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
        log(thinGrayText(`${this.msg} ${(this.end - this.start).toFixed(0)}ms`))

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
