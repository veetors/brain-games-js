const print = message => console.log(message);

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const identity = value => value;

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

const balanceNum = (value) => {
  if (value.lenght === 1) {
    return value.toString();
  }

  const nums = value.toString().split('').map(item => Number(item));
  const { length: digitsCount } = nums;
  const sumOfDigits = nums.reduce((acc, item) => acc + item, 0);

  const iter = (sum, collLength, acc) => {
    if (collLength < 1) {
      return acc;
    }

    const item = (sum - (sum % collLength)) / collLength;

    return iter(sum - item, collLength - 1, `${acc}${item}`);
  };

  return iter(sumOfDigits, digitsCount, '');
};

const getProgression = (num1, num2, count = 10, acc = []) => {
  if (count < 1) {
    return acc;
  }

  const newAcc = acc.concat(num1);

  return getProgression(num1 + num2, num2, count - 1, newAcc);
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const iter = (divisor = 2) => {
    if (divisor > num / 2) {
      return true;
    }

    if (num % divisor === 0) {
      return false;
    }

    return iter(divisor + 1);
  };

  return iter();
};


export {
  print,
  identity,
  randomNum,
  randomOperator,
  isEven,
  greatestCommonDivisor,
  balanceNum,
  getProgression,
  isPrime,
};
