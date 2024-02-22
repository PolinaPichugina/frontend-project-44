import getRandomNumber from '../getRandomNumber.js';
import brainGames from '../index.js';

const getQuestionAndAnswer = () => {
  const arrayOfOperators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(3);
  const randomOperator = arrayOfOperators[randomIndex];
  const a = getRandomNumber(100);
  const b = getRandomNumber(100);
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
      throw new Error(`Unknown operator: '${randomOperator}'!`);
  } return [question, correctAnswer];
};
const rule = 'What is the result of the expression?';

const calculator = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default calculator;
