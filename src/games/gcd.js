import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getGcd = (a, b) => {
  let gcd = 1;
  for (let divider = 2; divider < Math.min(a, b); divider += 1) {
    if (a % divider === 0 && b % divider === 0) {
      gcd = divider;
    }
  } return gcd;
};
const rule = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b);
  return [question, correctAnswer];
};
const gcd = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default gcd;
