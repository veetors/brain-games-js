import { randomNum, randomOperator, getUserAnswer } from '..';

const make = () => ({
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
  userAnswer: value => Number(getUserAnswer(value)),
});

export default make;
