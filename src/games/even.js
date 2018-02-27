import run from '..';
import { randomNum, isEven } from '../generic';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const num = randomNum().toString();

  const generateTask = num;
  const expectedAnswer = isEven(num) ? 'yes' : 'no';

  return {
    question: generateTask,
    answer: expectedAnswer,
  };
};

export default () => run(rules, gameData);
