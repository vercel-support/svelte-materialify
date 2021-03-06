import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src', 'theme'],
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.mjs', format: 'es' },
    { file: 'dist/index.js', format: 'umd', name },
    {
      file: 'dist/index.min.js',
      format: 'iife',
      name,
      plugins: [terser()],
    },
  ],
  plugins: [svelte({ preprocess }), resolve(), commonjs()],
};
