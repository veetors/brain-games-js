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

export { print, greeting, getUserName, randomNum, randomOperator, isEven, getUserAnswer };
