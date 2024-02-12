import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const question = `${a} ${b}`;
  let correctAnswer = 1;
  for (let i = 2; i < ((a < b) ? a : b); i += 1) {
    if (a % i === 0 && (b / 2) % i === 0) {
      correctAnswer = i;
    }
  } return [question, correctAnswer];
};
const gcd = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default gcd;
