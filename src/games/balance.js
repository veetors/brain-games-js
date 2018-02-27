import run from '..';
import { randomNum, balanceNum } from '../generic';

const rules = 'Balance the given number.';

const gameData = () => {
  const num = randomNum(10, 1000);

  const generateTask = value => value;
  const expectedAnswer = value => balanceNum(value);

  return {
    question: generateTask(num),
    answer: expectedAnswer(num),
  };
};

export default () => run(rules, gameData);
