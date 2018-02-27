import run from '..';
import { randomNum, isPrime } from '../generic';

const rules = 'Is this number prime?';

const gameData = () => {
  const num = randomNum(2);

  const generateTask = num;
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';

  return {
    question: generateTask,
    answer: expectedAnswer,
  };
};

export default () => run(rules, gameData);
