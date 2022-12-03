import { loadInput } from '../utils';

const output = loadInput(__dirname, 'input.txt')
  .split('\n\n')
  .map(data =>
    data
      .split('\n')
      .map(Number)
      .reduce((a, b) => a + b)
  )
  .sort((a, b) => b - a)[0];

console.log(output);
