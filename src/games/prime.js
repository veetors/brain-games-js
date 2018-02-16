import run from '..';
import { randomNum, identity, isPrime } from '../generic';

const rules = 'Is this number prime?';

const gameData = () => {
  const num = randomNum(2);

  const generateTask = identity;
  const expectedAnswer = value => (isPrime(value) ? 'yes' : 'no');

  return {
    question: generateTask(num),
    answer: expectedAnswer(num),
  };
};

export default () => run(rules, gameData);
