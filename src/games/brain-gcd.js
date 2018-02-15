import run from '..';
import { randomNum, greatestCommonDivisor } from '../generic';

const rules = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const num1 = randomNum(2, 31);
  const num2 = randomNum(2, 31);

  const generateTask = (firstNum, secondNum) => `${firstNum} ${secondNum}`;
  const expectedAnswer = (firstNum, secondNum) =>
    greatestCommonDivisor(firstNum, secondNum).toString();

  return {
    question: generateTask(num1, num2),
    answer: expectedAnswer(num1, num2),
  };
};

export default () => run(rules, gameData);
