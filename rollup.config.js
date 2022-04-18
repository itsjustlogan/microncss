import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    external: [
      'fs',
      'sass',
      'util',
      'path',
      'url',
      'chalk',
      'autoprefixer',
      'postcss',
      'cssnano',
      'cssnano-preset-default',
      '@fullhuman/postcss-purgecss',
    ],
    output: {
      dir: 'lib',
      preserveModules: false,
      sourcemap: true,
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser({}),
    ],
  },
]
