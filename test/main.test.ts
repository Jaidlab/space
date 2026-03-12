import {expect, it} from 'bun:test'

import {getMainModuleDefault} from 'zeug'

const space = await getMainModuleDefault<typeof import('../src/main.ts')>('space')
it('should run', () => {
  expect(space).toBeFunction()
  expect(space()).toBe('ඞ')
})
