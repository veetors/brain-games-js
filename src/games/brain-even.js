import { print, greeting, getUserName, randomNum, isEven, getUserAnswer } from '..';

export default () => {
  const task = () => randomNum();
  const expectedAnswer = value => (isEven(value) ? 'yes' : 'no');

  greeting();
  print('Answer "yes" if number even otherwise answer "no".\n');

  const userName = getUserName();
  print(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter < 1) {
      print(`Congratulations, ${userName}!`);
      return false;
    }

    const currentTask = task();
    const currentAnswer = expectedAnswer(currentTask);
    const userAnswer = getUserAnswer(currentTask);
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

