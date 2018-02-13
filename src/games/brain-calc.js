import { print, greeting, getUserName, randomNum, randomOperator, getUserAnswer } from '..';

export default () => {
  const task = (num1, num2, operator) => {
    switch (operator) {
      case 'plus':
        return `${num1} + ${num2}`;
      case 'minus':
        return `${num1} - ${num2}`;
      default:
        return `${num1} * ${num2}`;
    }
  };

  const expectedAnswer = (num1, num2, operator) => {
    switch (operator) {
      case 'plus':
        return num1 + num2;
      case 'minus':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };

  greeting();
  print('What is the result of the expression?\n');

  const userName = getUserName();
  print(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter < 1) {
      print(`Congratulations, ${userName}!`);
      return false;
    }

    const currentNum1 = randomNum(1, 11);
    const currentNum2 = randomNum(1, 11);
    const currentOperator = randomOperator();
    const currentTask = task(currentNum1, currentNum2, currentOperator);
    const currentAnswer = expectedAnswer(currentNum1, currentNum2, currentOperator);
    const userAnswer = Number(getUserAnswer(currentTask));
    const isUserRight = userAnswer === currentAnswer;
    const answer = isUserRight
      ?
      'Correct!'
      :
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.\nLet's try again, ${userName}!`;

    print(answer);

    return isUserRight ? iter(counter - 1) : false;
  };

  return iter(3);
};
