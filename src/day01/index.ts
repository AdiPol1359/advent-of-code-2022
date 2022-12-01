import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const [elf1, elf2, elf3] = input
  .split('\n\n')
  .map(data =>
    data
      .split('\n')
      .map(Number)
      .reduce((a, b) => a + b)
  )
  .sort((a, b) => b - a);

console.log(elf1);
console.log(elf1 + elf2 + elf3);
