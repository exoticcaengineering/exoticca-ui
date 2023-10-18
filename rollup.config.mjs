import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import svgr from '@svgr/rollup';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

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
      svgr({ icon: true }),
      dynamicImportVars({ warnOnError: true }),
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
];
