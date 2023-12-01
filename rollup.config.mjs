import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import mainPackageJson from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';

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
    output: [
      {
        file: mainPackageJson.main,
        format: 'cjs',
        sourcemap: true,
        interop: 'auto',
        inlineDynamicImports: true,
        exports: 'named',
      },
      {
        file: mainPackageJson.module,
        format: 'esm',
        sourcemap: true,
        interop: 'esModule',
        inlineDynamicImports: true,
        exports: 'named',
      },
    ],
    plugins,
  },
  {
    input: 'dist/esm/index.d.ts',
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
