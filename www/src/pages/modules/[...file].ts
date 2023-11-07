import type { APIRoute } from 'astro';
import { globby } from 'globby';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { packageDirectory } from 'pkg-dir';
import slash from 'slash';

export const targetModules = [
  '@vivliostyle/theme-base/package.json',
  '@vivliostyle/viewer',
  'tbf15-theme',
] as const;

const __require = createRequire(import.meta.url);

export interface Props {
  file: string;
  absPath: string;
  modName: string;
  modRootDir: string;
}

export async function collectTargetFiles(): Promise<Props[]> {
  return (
    await Promise.all(
      targetModules.map(async (resolveTarget) => {
        const modRootDir = await packageDirectory({
          cwd: __require.resolve(resolveTarget),
        });
        if (!modRootDir) {
          return;
        }
        const pkg = JSON.parse(
          await fs.promises.readFile(
            path.join(modRootDir, 'package.json'),
            'utf8'
          )
        );
        return {
          modName: pkg.name,
          modRootDir,
          files: await globby('**/*', {
            cwd: modRootDir,
            ignore: ['*/node_modules'],
          }),
        };
      })
    )
  ).flatMap(
    (param) =>
      param?.files.map((file) => {
        const { modName, modRootDir } = param;
        return {
          file: path.posix.join(modName, slash(file)),
          absPath: path.join(modRootDir, file),
          modName,
          modRootDir,
        };
      }) || []
  );
}

export const getStaticPaths = () =>
  collectTargetFiles().then((xs) =>
    xs.map((props) => ({ params: { file: props.file }, props }))
  );

export const GET: APIRoute<Props> = async ({ props }) => {
  return new Response(await fs.promises.readFile(props.absPath));
};
