import { loadInput } from '../utils';

const shapes = ['SCISSORS', 'ROCK', 'PAPER'] as const;
const playerMoves = ['X', 'Y', 'Z'] as const;

type Shape = typeof shapes[number];
type Move2 = typeof playerMoves[number];
type Move1 = 'A' | 'B' | 'C';

const movesShape: Record<Move1 | Move2, Shape> = {
  A: 'ROCK',
  X: 'ROCK',
  B: 'PAPER',
  Y: 'PAPER',
  C: 'SCISSORS',
  Z: 'SCISSORS',
};

const output = loadInput(__dirname, 'input.txt')
  .split('\n')
  .map(data => data.split(' ') as [Move1, Move2])
  .reduce((prev, [move1, move2]) => {
    const index1 = shapes.indexOf(movesShape[move1]);
    const index2 = shapes.indexOf(
      shapes.at(
        (index1 + playerMoves.findIndex(move => move === move2) - 1) %
          shapes.length
      )!
    );

    const points = (() => {
      switch (index1 - index2) {
        case 1:
        case -2:
          return 0;
        case -1:
        case 2:
          return 6;
        default:
          return 3;
      }
    })();

    return (
      prev +
      points +
      playerMoves.indexOf((['Z', 'X', 'Y'] as const)[index2]) +
      1
    );
  }, 0);

console.log(output);
