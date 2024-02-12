import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  let currentElement = getRandomNumber();
  const step = getRandomNumber();
  let stepsCount = 0;
  const arrayOfElement = [];
  for (currentElement; stepsCount < 10; stepsCount += 1) {
    arrayOfElement.push(currentElement);
    currentElement += step;
  }
  const randomIndex = Math.floor(Math.random() * 10);
  const correctAnswer = arrayOfElement[randomIndex];
  const array = [...arrayOfElement];
  array[randomIndex] = '..';
  const question = array.join(' ');
  return [question, correctAnswer];
};
const getProgression = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default getProgression;
