import {
  cleanupWorkspace,
  compile,
  copyAssets,
  prepareThemeDirectory,
} from '@vivliostyle/cli/dist/builder.js';
import { mergeConfig } from '@vivliostyle/cli/dist/config.js';
import { exportWebPublication } from '@vivliostyle/cli/dist/webbook.js';
import { createRequire } from 'node:module';
import path from 'node:path';
import glob from 'tiny-glob';

const require = createRequire(import.meta.url);

export const themes = {
  'grid-system': '@spring-raining/vs-theme-grid-system',
} as const;

export const buildThemeExamples = async (
  modName: string
): Promise<{ outputDir: string; workspaceDir: string; files: string[] }> => {
  const configFilePath = require.resolve(`${modName}/vivliostyle.config.mjs`);
  const context = path.join(configFilePath, '..');
  const configFileContent = (await import(/* @vite-ignore*/ configFilePath))
    .default;
  const config = await mergeConfig({}, configFileContent, context);
  const { workspaceDir } = config;
  await cleanupWorkspace(config);
  await prepareThemeDirectory(config);
  await compile(config);
  await copyAssets(config);
  const outputDir = await exportWebPublication({
    ...config,
    input: workspaceDir,
    outputDir: path.join(context, 'book'),
  });

  // collect output
  const files = await Promise.all([
    glob('publication.json', { cwd: outputDir }),
    glob('**/*.{html,css}', { cwd: outputDir }),
    ...(config.includeAssets as string[]).map((pattern: string) =>
      glob(pattern, { cwd: outputDir })
    ),
  ]);
  return { outputDir, workspaceDir, files: [...new Set(files.flat())] };
};
