import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const extensions = ['.js'];

export default {
  input: 'src/index.js',
  output: {
    name: 'MacbookKeyboard',
    file: 'demo/macbook_keyboard.js',
    format: 'umd',
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    resolve({ extensions }),
    postcss({
      extract: false,
      use: ['sass'],
    }),
    commonjs(),
    babel({ extensions, include: 'src/**/*' }),
    serve({
      contentBase: ['demo', 'dist'],
      host: 'localhost',
      port: 8080,
    }),
    livereload(),
  ],
};
