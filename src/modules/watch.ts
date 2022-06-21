import fs from 'fs'
import { errorText, log, logo, cwd, thinGrayText } from '../utils/constants'
import { getConfigFile, parseDate } from '../utils/getData'
import StyleBuilder from './styleBuilder'

export default async function watchOption() {
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

    // create StyleBuilder instance
    const watchBuilder = new StyleBuilder('watch', 'rebuilt in')

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

          // invoke builder
          watchBuilder.builder()

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
