import { defineConfig } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends('jordanmonier'),

    rules: {
      'no-void': ['off'],
      '@typescript-eslint/no-inferrable-types': ['off'],
      '@typescript-eslint/no-unsafe-member-access': ['off'],
      'no-await-in-loop': ['off'],
      'promise/no-promise-in-callback': ['off'],
      'promise/no-callback-in-promise': ['off'],
      'import/no-extraneous-dependencies': ['off'],
    },
  },
])
