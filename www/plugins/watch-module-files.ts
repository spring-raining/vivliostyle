import type { AstroIntegration } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectTargetFiles } from '../src/pages/modules/[...file]';

export const watchModuleFiles = (): AstroIntegration => ({
  name: 'local:watchModuleFiles',
  hooks: {
    'astro:config:setup': async ({ addWatchFile, config }) => {
      const targetFiles = await collectTargetFiles();
      // [no-exist, exist]
      const statCache = [new Set<string>(), new Set<string>()] as const;
      targetFiles
        .flatMap(({ modRootDir, absPath, modName }) => {
          // Specify directory via `_module` rather than `node_modules`.
          // Files within node_modules will be ignored from the Astro file watcher.
          const installedDir = path.join(
            fileURLToPath(config.root),
            'plugins/_modules',
            modName
          );
          const exists = statCache[0].has(installedDir)
            ? false
            : statCache[1].has(installedDir)
            ? true
            : (() => {
                const exists = fs.existsSync(installedDir);
                statCache[exists ? 1 : 0].add(installedDir);
                return exists;
              })();
          return exists
            ? path.join(installedDir, path.relative(modRootDir, absPath))
            : [];
        })
        .forEach((absPath) => {
          addWatchFile(absPath);
        });
    },
  },
});
