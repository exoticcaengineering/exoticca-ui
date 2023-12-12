import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import mainPackageJson from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  svgr(),
  typescript({
    tsconfig: './tsconfig.build.json',
  }),
  terser(),
  filesize(),
];

export default [
  {
    external: ['react-dom'],
    input: 'src/index.ts',
    output: {
      file: mainPackageJson.main,
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
      inlineDynamicImports: true,
      exports: 'named',
    },
    plugins,
  },
  {
    input: {
      index: 'src/index.ts',
      'components/index': 'src/components/index.ts',
      'themes/index': 'src/themes/index.ts',
    },
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      interop: 'esModule',
      exports: 'named',
    },
    plugins,
  },
  {
    input: 'dist/components/index.d.ts',
    output: [{ file: 'dist/components/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
      generatePackageJson({
        baseContents: {
          name: '@exoticcaengineering/exoticca-ui/components',
          private: true,
          main: '../cjs/index.js', // --> points to cjs format entry point of whole library
          module: './index.js', // --> points to esm format entry point of individual component
          types: './index.d.ts', // --> points to types definition file of individual component
        },
      }),
    ],
  },
  {
    input: 'dist/themes/index.d.ts',
    output: [{ file: 'dist/themes/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
      generatePackageJson({
        baseContents: {
          name: '@exoticcaengineering/exoticca-ui/themes',
          private: true,
          main: '../cjs/index.js', // --> points to cjs format entry point of whole library
          module: './index.js', // --> points to esm format entry point of individual component
          types: './index.d.ts', // --> points to types definition file of individual component
        },
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
    ],
  },
];
