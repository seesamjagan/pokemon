import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'; // Converts CommonJS modules to ES6
import resolve from '@rollup/plugin-node-resolve'; // Resolves node modules
import terser from '@rollup/plugin-terser'; // Minifies the output
import typescript from '@rollup/plugin-typescript'; // TypeScript support
import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // Excludes peer dependencies from bundle
import postcss from 'rollup-plugin-scss'; // For processing CSS files
import extractCss from './rollup-plugin-extract-css.js'; // Custom plugin for extracting CSS

const outputDir = 'dist';

export default {
  input: 'src/index.ts', // Entry point for the package
  output: [
    {
      file: 'dist/index.cjs.js', // CommonJS bundle
      format: 'cjs',
      sourcemap: true, // Source maps for debugging
    },
    {
      file: 'dist/index.esm.js', // ES module bundle
      format: 'esm',
      sourcemap: true, // Source maps for debugging
    },
  ],
  plugins: [
    peerDepsExternal(), // Automatically excludes peer dependencies from the bundle
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS to ES6
    typescript({ tsconfig: './tsconfig.json' }), // TypeScript support
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    }),
    postcss({ // CSS processing
        minimize: true, // Minify CSS
        fileName: 'styles/styles.css',
        outputStyle: 'compressed'
    }),
    extractCss({
        include: 'src/**/*.scss',
        outputDir,
    }),
    terser(), // Minify the output
  ],
  external: ['react', 'react-dom', '@dex/utilities'], // External dependencies to avoid bundling
};
