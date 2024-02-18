import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  let correctAnswer;
  if (isPrime(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
const primeGame = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default primeGame;
