import { run } from '..';
import { randomNum, isEven } from '../generic';

const game = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  data: () => ({
    num1: randomNum(),
  }),
  task: num => num,
  expectedAnswer: value => (isEven(value) ? 'yes' : 'no'),
};

export default () => run(game);
