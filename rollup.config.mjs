import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';

export default [
  {
    external: ['react-dom'],
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
        inlineDynamicImports: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        interop: 'esModule',
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      svgr(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      filesize(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
    ],
  },
  {
    external: ['react-dom'],
    input: 'src/components/SvgIcons/index.ts',
    output: [
      {
        file: 'dist/cjs/icons/index.js',
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
        inlineDynamicImports: true,
      },
      {
        file: 'dist/esm/icons/index.js',
        format: 'esm',
        sourcemap: true,
        interop: 'esModule',
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      svgr(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      filesize(),
    ],
  },
  {
    input: 'dist/esm/types/components/SvgIcons/index.d.ts',
    output: [{ file: 'dist/icons/index.d.ts', format: 'esm' }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: '.',
        },
      }),
    ],
  },
];
