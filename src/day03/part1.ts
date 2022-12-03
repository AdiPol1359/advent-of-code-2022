import { loadInput } from '../utils';

const output = loadInput(__dirname, 'input.txt')
  .split('\n')
  .reduce((prev, data) => {
    const first = data.slice(0, data.length / 2);
    const second = data.slice(data.length / 2);

    const letter = [...first].find(letter => second.includes(letter)) || '';
    const charCode = letter.charCodeAt(0);

    return prev + charCode - (letter.toUpperCase() === letter ? 38 : 96);
  }, 0);

console.log(output);
