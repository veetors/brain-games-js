import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const printRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  return name;
};

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => num % 2 === 0;

const brainEven = () => {
  greeting();
  printRules();

  const userName = getUserName();

  const iter = (counter) => {
    if (counter < 1) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const num = randomNum();
    const currentAnswer = isEven(num) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
    const isUserRight = userAnswer.toLowerCase() === currentAnswer;
    const answer = isUserRight
      ?
      'Correct!'
      :
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.\nLet's try again, ${userName}!`;

    console.log(answer);

    return isUserRight ? iter(counter - 1) : false;
  };

  return iter(3);
};

export default brainEven;
