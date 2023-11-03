// import { build } from '@vivliostyle/cli';
import { createRequire } from 'node:module';
import path from 'node:path';
import glob from 'tiny-glob';

const require = createRequire(import.meta.url);

export const themes = {
  'eal-float-system': '@spring-raining/vs-theme-eal-float-system',
  'grid-system': '@spring-raining/vs-theme-grid-system',
  'photo-book': '@spring-raining/vs-theme-photo-book',
  'eal-magazine': '@spring-raining/vs-theme-eal-magazine',
} as const;

export const buildThemeExamples = async (
  modName: string
): Promise<{ outputDir: string; files: string[] }> => {
  const configFilePath = require.resolve(`${modName}/vivliostyle.config.mjs`);
  const context = path.join(configFilePath, '..');
  const outputDir = path.join(context, 'book');
  // await build({
  //   configPath: configFilePath,
  //   logLevel: 'silent',
  //   targets: [
  //     {
  //       format: 'webpub',
  //       path: outputDir,
  //     },
  //   ],
  // });

  // collect output
  const files = await glob('**/*', { cwd: outputDir, filesOnly: true });
  return { outputDir, files: [...new Set(files.flat())] };
};
