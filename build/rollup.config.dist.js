import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js'];

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/macbook_keyboard.js',
    format: 'es',
  }, {
    name: 'MacbookKeyboard',
    file: 'dist/macbook_keyboard.min.js',
    format: 'umd',
    plugins: [
      terser(),
    ],
  }],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      use: ['sass'],
    }),
    babel({ extensions, include: 'src/**/*' }),
  ],
};
