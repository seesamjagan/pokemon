// rollup-plugin-extract-css.js
import path from 'path';
import fs from 'fs';
import { createFilter } from '@rollup/pluginutils';
import * as sass from 'sass';

export default function extractCss(options = {}) {
  const filter = createFilter(options.include, options.exclude);
  const cssMap = new Map();

  return {
    name: 'extract-css',
    transform(code, id, ...rest) {
      if (!filter(id)) return null;

      if (id.endsWith('.scss')) {
        const currentDir = process.cwd();
        const sourcePath = path.dirname(id.replace(currentDir, '')).replace(/^\/src/, options.outputDir ?? 'dist');
        const cssFileName = path.join(sourcePath, path.basename(id, '.scss') + '.css');
        // console.log({sourcePath, id, cssFileName});

        // Compile SCSS to CSS using sass
        const result = sass.renderSync({
          file: id, // SCSS file path
          outputStyle: 'compressed', // CSS output style
          sourceMap: options.sourceMap ? true : false, // Enable source maps if specified
        });

        // Store CSS content and file name
        cssMap.set(cssFileName, result.css.toString());

        // Return an empty result for the module to avoid including SCSS content in the JS bundle
        return { code: '', map: result.map ? { mappings: '' } : null };
      }

      return null;
    },
    generateBundle() {

      cssMap.forEach((cssContent, cssFileName) => {

        const dir = cssFileName.replace(path.basename(cssFileName), '');
        console.log(dir, cssFileName, path.basename(cssFileName), path.basename(cssFileName, '.css'));
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(cssFileName, cssContent);
      });
    }
  };
}
