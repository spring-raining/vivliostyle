import { viewerRoot } from '@vivliostyle/cli/dist/const.js';
import fs from 'node:fs';
import path from 'node:path';

export const viewerVersion: string = JSON.parse(
  fs.readFileSync(path.join(viewerRoot, 'package.json'), { encoding: 'utf-8' })
).version;
