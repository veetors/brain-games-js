import { getUserAnswer, run } from '..';
import { randomNum, isEven } from '../generic';

const make = () => ({
  rules: 'Answer "yes" if number even otherwise answer "no".',
  data: () => ({
    num1: randomNum(),
  }),
  task: num => num,
  expectedAnswer: value => (isEven(value) ? 'yes' : 'no'),
  userAnswer: value => getUserAnswer(value),
});

export default () => run(make());
