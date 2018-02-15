import run from '..';
import { randomNum, randomOperator } from '../generic';

const rules = 'What is the result of the expression?';

const gameData = () => {
  const num1 = randomNum(1, 11);
  const num2 = randomNum(1, 11);
  const operator = randomOperator();

  const generateTask = (firstNum, secondNum, sign) => {
    let currentSing;

    switch (sign) {
      case 'plus':
        currentSing = '+';
        break;
      case 'minus':
        currentSing = '-';
        break;
      default:
        currentSing = '*';
    }

    return `${firstNum} ${currentSing} ${secondNum}`;
  };

  const expectedAnswer = (firstNum, secondNum, sign) => {
    let result;

    switch (sign) {
      case 'plus':
        result = firstNum + secondNum;
        break;
      case 'minus':
        result = firstNum - secondNum;
        break;
      default:
        result = firstNum * secondNum;
    }

    return result.toString();
  };

  return {
    question: generateTask(num1, num2, operator),
    answer: expectedAnswer(num1, num2, operator),
  };
};

export default () => run(rules, gameData);
