import run from '..';
import { randomNum, getProgression } from '../generic';

const rules = 'What number is missing in this progression?';

const gameData = () => {
  const num1 = randomNum(2, 101);
  const num2 = randomNum(2, 21);
  const answerIndex = randomNum(0, 10);
  const progression = getProgression(num1, num2);

  const generateTask = coll => coll.map((item, index) => (index === answerIndex ? '..' : `${item}`)).join(' ');
  const expectedAnswer = coll => coll[answerIndex].toString();

  return {
    question: generateTask(progression),
    answer: expectedAnswer(progression),
  };
};

export default () => run(rules, gameData);
