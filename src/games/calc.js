import getRandomNumber from '../getRandomNumber.js';
import brainGames from '../index.js';

const getQuestionAndAnswer = () => {
  const arrayOfOperators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomOperator = arrayOfOperators[randomIndex];
  const a = getRandomNumber();
  const b = getRandomNumber();
  let question = '';
  let correctAnswer;
  switch (randomOperator) {
    case '+': correctAnswer = a + b; question = `${a} + ${b}`;
      break;
    case '-': correctAnswer = a - b; question = `${a} - ${b}`;
      break;
    case '*': correctAnswer = a * b; question = `${a} * ${b}`;
      break;
    default:
      question = null;
  } return [question, correctAnswer];
};
const rule = 'What is the result of the expression?';

const calculator = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default calculator;
