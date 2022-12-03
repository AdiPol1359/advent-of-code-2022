import { loadInput } from '../utils';

const output = loadInput(__dirname, 'input.txt')
  .split('\n')
  .reduce((prev, _, i, array) => {
    if (i % 3 === 0) {
      prev.push([...array].splice(prev.length * 3, 3));
    }

    return prev;
  }, [] as string[][])
  .reduce((prev, [first, second, third]) => {
    const letter =
      [...first].find(
        letter => second.includes(letter) && third.includes(letter)
      ) || '';
    const charCode = letter.charCodeAt(0);

    return prev + charCode - (letter.toUpperCase() === letter ? 38 : 96);
  }, 0);

console.log(output);
