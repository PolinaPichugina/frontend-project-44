import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  let correctAnswer;
  if (question < 2) {
    correctAnswer = 'no';
    return [question, correctAnswer];
  }
  let i = 2;
  while (i < question) {
    if (question % i === 0) {
      correctAnswer = 'no';
      return [question, correctAnswer];
    } i += 1;
  }
  correctAnswer = 'yes';
  return [question, correctAnswer];
};
const isPrime = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default isPrime;
