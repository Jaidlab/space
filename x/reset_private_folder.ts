import * as path from 'path'

import fs from 'fs-extra'

const subfolderNames = ['notes', 'downloads', 'clones', 'scripts', 'test', 'results', 'reports']
const privateFolder = path.join(import.meta.dir, '..', 'private')
await fs.emptyDir(privateFolder)
const privateAgentFolder = path.join(privateFolder, 'agent')
for (const subfolderName of subfolderNames) {
  await fs.emptyDir(path.join(privateAgentFolder, subfolderName))
}
const gitignoreFile = path.join(privateFolder, '.gitignore')
await fs.outputFile(gitignoreFile, '*\n')
