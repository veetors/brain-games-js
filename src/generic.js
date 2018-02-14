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
  if (num1 === num2) {
    return num1;
  }

  const base = num1 < num2 ? Math.floor(num1 / 2) : Math.floor(num2 / 2);

  const iter = (firstNum, secondNum, divisor) => {
    if (divisor === 1) {
      return 1;
    }

    if (firstNum % divisor === 0 && secondNum % divisor === 0) {
      return divisor;
    }

    return iter(firstNum, secondNum, divisor - 1);
  };

  return iter(num1, num2, base);
};

export {
  print,
  randomNum,
  randomOperator,
  isEven,
  greatestCommonDivisor,
};
