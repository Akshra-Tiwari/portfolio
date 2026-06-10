import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Allow @ts-ignore in specific cases
      '@typescript-eslint/ban-ts-comment': 'warn',
      // Allow any in specific complex generics
      '@typescript-eslint/no-explicit-any': 'warn',
      // Framer Motion often needs unused vars for destructuring
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // Next.js Image is preferred but <img> may appear in SVG
      '@next/next/no-img-element': 'warn',
    },
  },
]

export default eslintConfig
