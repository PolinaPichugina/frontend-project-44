import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } return false;
};
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(100);
  let correctAnswer = '';
  if (isEven(question)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
const evenGame = () => {
  brainGames(rule, getQuestionAndAnswer);
};

export default evenGame;
