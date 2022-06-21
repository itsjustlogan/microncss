import fs from 'fs'
import util from 'util'
import sass from 'sass'
import path from 'path'
import { getPackageDir } from './getData'
import { sassFile, cwd } from './constants'

// sass compiler
export function compileSass(): sass.CompileResult {
  const output = sass.compile(path.resolve(getPackageDir(), sassFile))
  return output
}

// create directory
const mkdir = util.promisify(fs.mkdir)

export async function makeDir(dirToCreate: string): Promise<string> {
  await mkdir(`${cwd}/${dirToCreate}`, { recursive: true })

  return dirToCreate
}

// generic file reader
const readFile = util.promisify(fs.readFile)

export async function readData(sourceFile: string) {
  const dataRead = await readFile(path.resolve(getPackageDir(), sourceFile))
  return dataRead
}

// generic file writer
export function writeData(
  data: Buffer | string,
  pathToWrite: string,
  filename: string
): void {
  fs.writeFile(`${cwd}/${pathToWrite}/${filename}`, data, () => true)
}

// generic file writer (local project)
export function writeLocal(
  data: Buffer | string,
  pathToWrite: string,
  filename: string
): void {
  fs.writeFile(`${pathToWrite}/${filename}`, data, () => true)
}
