import fs from 'fs'

const writeLocal = (
  data: Buffer | string,
  pathToWrite: string,
  filename: string
): void => {
  fs.writeFile(`${pathToWrite}/${filename}`, data, () => true)
}

export default writeLocal
