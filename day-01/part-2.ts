import { loadInput } from '../utils';

const [elf1, elf2, elf3] = loadInput(__dirname, 'input.txt')
  .split('\n\n')
  .map(data =>
    data
      .split('\n')
      .map(Number)
      .reduce((a, b) => a + b)
  )
  .sort((a, b) => b - a);

console.log(elf1 + elf2 + elf3);
