import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => (number % 2 === 0);
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(100);
  let correctAnswer = '';
  correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const evenGame = () => {
  brainGames(rule, getQuestionAndAnswer);
};

export default evenGame;
