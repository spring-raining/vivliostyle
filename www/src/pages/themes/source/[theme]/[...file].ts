import { buildThemeExamples, themes } from '@/lib/themes';
import type { APIRoute } from 'astro';
import mime from 'mime';
import fs from 'node:fs';
import path from 'node:path';
import slash from 'slash';

export const all: APIRoute = async ({ props }) => {
  const mimeType = mime.getType(path.extname(props.filePath)) || 'text/plain';
  return new Response(await fs.promises.readFile(props.filePath), {
    status: 200,
    headers: {
      'Content-Type': `${mimeType};charset=utf-8`,
    },
  });
};

export async function getStaticPaths() {
  return (
    await Promise.all(
      Object.entries(themes).map(async ([theme, modName]) => {
        const out = await buildThemeExamples(modName);
        return { theme, ...out };
      })
    )
  ).flatMap(({ theme, workspaceDir, files }) =>
    files.map((file) => ({
      params: { theme, file: slash(file) },
      props: {
        filePath: path.join(workspaceDir, file),
      },
    }))
  );
}
