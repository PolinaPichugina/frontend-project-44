import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  let correctAnswer = '';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
const isEven = () => {
  brainGames(rule, getQuestionAndAnswer);
};

export default isEven;
