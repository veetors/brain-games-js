const print = message => console.log(message);

const randomNum = (min = 1, max = 101) => Math.floor(Math.random() * (max - min)) + min;

const identity = value => value;

const compareNumeric = (num1, num2) => (num1 > num2 ? 1 : -1);

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
  const isBalanced = (coll) => {
    const sorted = coll.sort(compareNumeric);

    if (sorted.join('') !== value.toString()) {
      return false;
    }

    if (sorted[coll.length - 1] - sorted[0] < 0 || sorted[coll.length - 1] - sorted[0] > 1) {
      return false;
    }

    return true;
  };

  const nums = value.toString().split('').map(item => Number(item));

  if (value.lenght === 1 || isBalanced(nums)) {
    return value.toString();
  }

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

export {
  print,
  identity,
  compareNumeric,
  randomNum,
  randomOperator,
  isEven,
  greatestCommonDivisor,
  balanceNum,
};
