import brainGames from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const generateSequence = (firstElement, length, step) => {
  const arrayOfElement = [];
  let stepsCount = 0;
  for (let currentElement = firstElement; stepsCount < length; stepsCount += 1) {
    arrayOfElement.push(currentElement);
    currentElement += step;
  }
  return arrayOfElement;
};
const rule = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const arrayOfElement = generateSequence(getRandomNumber(100), 10, getRandomNumber(100));
  const randomIndex = getRandomNumber(10);
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
