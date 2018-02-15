const print = message => console.log(message);

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

const greatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }

  return greatestCommonDivisor(num2, num1 % num2);
};

export {
  print,
  randomNum,
  randomOperator,
  isEven,
  greatestCommonDivisor,
};
