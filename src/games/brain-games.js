import readlineSync from 'readline-sync';
import { print } from '../generic';
import brainBalance from './balance';
import brainCalc from './calc';
import brainGcd from './gcd';
import brainEven from './even';
import brainPrime from './prime';
import brainProgression from './progression';

const games = {
  0: () => {
    print('Bye. See you later...');
    return false;
  },
  1: brainBalance,
  2: brainCalc,
  3: brainGcd,
  4: brainEven,
  5: brainPrime,
  6: brainProgression,
};


export default () => {
  print('Welcome to the Brain Games!\n');
  print('Please, select the game:\n');
  print('1. brain-balance\n2. brain-calc\n3. brain-gcd\n4. brain-even\n5. brain-prime\n6. brain-progression\n0. exit\n');
  print('Enter <1-6> to select the game, or <0> to exit.\n');

  const g = readlineSync.keyIn('Make your choise: \n', { limit: '$<0-6>' });

  return games[g]();
};
