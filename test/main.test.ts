import { it, expect } from "bun:test"

import {getMainModuleDefault} from 'zeug'

const space = await getMainModuleDefault<typeof import('../src/index.ts')>('space')

it("should run", () => {
  expect(space).toBe(1) // TODO Test actual functionality
})
