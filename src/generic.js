export const print = message => console.log(message);

export const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

export const randomOperator = () => {
  const num = randomNum(1, 4);
  if (num === 1) {
    return 'plus';
  } else if (num === 2) {
    return 'minus';
  }

  return 'multi';
};

export const isEven = num => num % 2 === 0;

export const greatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }

  return greatestCommonDivisor(num2, num1 % num2);
};

export const balanceNum = (value) => {
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

export const getProgression = (num1, num2, count = 10, acc = []) => {
  if (count < 1) {
    return acc;
  }

  const newAcc = acc.concat(num1);

  return getProgression(num1 + num2, num2, count - 1, newAcc);
};

export const isPrime = (num) => {
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
