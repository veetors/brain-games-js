import readlineSync from 'readline-sync';
import { print } from './generic';

const greeting = () => print('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = task => readlineSync.question(`Question: ${task}\nYour answer: `);

const run = (game) => {
  greeting();
  print(`${game.rules}\n`);

  const userName = getUserName();
  print(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter < 1) {
      print(`Congratulations, ${userName}!`);
      return false;
    }

    const data = game.data();
    const currentTask = game.task(data.num1, data.num2, data.operator);
    const currentAnswer = game.expectedAnswer(data.num1, data.num2, data.operator);
    const userAnswer = game.userAnswer(currentTask);
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

export {
  greeting,
  getUserName,
  getUserAnswer,
  run,
};
