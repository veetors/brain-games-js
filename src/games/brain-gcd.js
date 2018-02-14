import { getUserAnswer, run } from '..';
import { randomNum, greatestCommonDivisor } from '../generic';

const make = () => ({
  rules: 'Find the greatest common divisor of given numbers.',
  data: () => ({
    num1: randomNum(2, 31),
    num2: randomNum(2, 31),
  }),
  task: (num1, num2) => `${num1} ${num2}`,
  expectedAnswer: (num1, num2) => greatestCommonDivisor(num1, num2),
  userAnswer: value => Number(getUserAnswer(value)),
});

export default () => run(make());
