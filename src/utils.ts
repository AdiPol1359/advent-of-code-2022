import fs from 'node:fs';
import path from 'node:path';

export const loadInput = (...paths: string[]) => {
  return fs.readFileSync(path.join(...paths)).toString();
};
