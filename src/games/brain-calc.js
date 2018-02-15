import { run } from '..';
import { randomNum, randomOperator } from '../generic';

const game = {
  rules: 'What is the result of the expression?',
  data: () => ({
    num1: randomNum(1, 11),
    num2: randomNum(1, 11),
    operator: randomOperator(),
  }),
  task: (num1, num2, operator) => {
    switch (operator) {
      case 'plus':
        return `${num1} + ${num2}`;
      case 'minus':
        return `${num1} - ${num2}`;
      default:
        return `${num1} * ${num2}`;
    }
  },
  expectedAnswer: (num1, num2, operator) => {
    switch (operator) {
      case 'plus':
        return num1 + num2;
      case 'minus':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  },
};

export default () => run(game);
