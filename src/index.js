import readlineSync from 'readline-sync';
import { print } from './generic';

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = question => readlineSync.question(`Question: ${question}\nYour answer: `);

const run = (rules, func) => {
  print('Welcome to the Brain Games!');
  print(`${rules}\n`);

  const userName = getUserName();
  print(`Hello, ${userName}!\n`);

  const iter = (counter) => {
    if (counter < 1) {
      print(`Congratulations, ${userName}!`);
      return false;
    }

    const data = func();
    const userAnswer = getUserAnswer(data.question);
    const isUserRight = userAnswer === data.answer;
    const output = isUserRight
      ?
      'Correct!'
      :
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${data.answer}'.\nLet's try again, ${userName}!`;

    print(output);

    return isUserRight ? iter(counter - 1) : false;
  };

  return iter(3);
};

export default run;
