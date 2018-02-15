import run from '..';
import { randomNum, isEven } from '../generic';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const num = randomNum().toString();

  const generateTask = value => value;
  const expectedAnswer = value => (isEven(value) ? 'yes' : 'no');

  return {
    question: generateTask(num),
    answer: expectedAnswer(num),
  };
};

export default () => run(rules, gameData);
