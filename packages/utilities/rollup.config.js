import resolve from '@rollup/plugin-node-resolve'; // Resolves node modules
import commonjs from '@rollup/plugin-commonjs'; // Converts CommonJS modules to ES6
import typescript from '@rollup/plugin-typescript'; // TypeScript support
import terser from '@rollup/plugin-terser'; // Minifies the output
import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // Excludes peer dependencies from bundle

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
    terser(), // Minify the output
  ],
  external: ['react', 'react-dom'], // External dependencies to avoid bundling
};
