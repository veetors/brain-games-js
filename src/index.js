import readlineSync from 'readline-sync';

const print = message => console.log(message);

const greeting = () => print('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const randomOperator = () => {
  const num = randomNum(1, 10);
  if (num <= 3) {
    return 'plus';
  } else if (num >= 7) {
    return 'minus';
  }

  return 'multi';
};

const isEven = num => num % 2 === 0;

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

export { print, greeting, getUserName, randomNum, randomOperator, isEven, getUserAnswer, run };
