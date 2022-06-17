import fs from 'fs'
import parseDate from '../utils/parseDate'
import { errorText, log, logo, cwd, thinGrayText } from '../utils/constants'
import watcherBuilder from './watcherBuilder'
import getConfigFile from '../utils/getConfigFile'
import StyleBuilder from './styleBuilder'

const watcher = async () => {
  let watching = false

  const watch = await getConfigFile(0)

  log(
    `${thinGrayText('From')} ${logo('microncss.config.js:')} \n`,
    `${thinGrayText('watch:')} `,
    await getConfigFile(0),
    `${thinGrayText('\n templates:')} `,
    await getConfigFile(1)
  )

  if (watch) {
    log(logo('[microncss]'), thinGrayText('watching...👀'))

    // creat StyleBuilder instance
    const watchBuild = new StyleBuilder()

    watch.forEach((watchDir: string) => {
      fs.watch(
        `${cwd}/${watchDir}`,
        { recursive: false },
        (eventType, fileName) => {
          if (watching) return
          watching = true

          const getDate = parseDate()

          log(
            thinGrayText(`\n${getDate}`),
            logo('[microncss]'),
            thinGrayText(`"${fileName}" was ${eventType}d`)
          )

          // testing object builder
          watchBuild.builder('watch', 'rebuilt in')
          // watcherBuilder()

          setTimeout(() => {
            watching = false
          }, 100)
        }
      )
    })
  } else {
    console.error(errorText('Error: There are no directories to watch.'))
    log(watch)
  }
}

export default watcher
