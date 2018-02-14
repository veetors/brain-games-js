import { randomNum, isEven, getUserAnswer } from '..';

const make = () => ({
  rules: 'Answer "yes" if number even otherwise answer "no".',
  data: () => ({
    num1: randomNum(),
  }),
  task: num => num,
  expectedAnswer: value => (isEven(value) ? 'yes' : 'no'),
  userAnswer: value => getUserAnswer(value),
});

export default make;

