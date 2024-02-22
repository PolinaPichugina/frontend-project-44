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
  const seqLength = 10;
  const maxNumber = 100;
  const array = generateSequence(getRandomNumber(maxNumber), seqLength, getRandomNumber(maxNumber));
  const randomIndex = getRandomNumber(seqLength);
  const correctAnswer = array[randomIndex];
  array[randomIndex] = '..';
  const question = array.join(' ');
  return [question, correctAnswer];
};
const getProgression = () => {
  brainGames(rule, getQuestionAndAnswer);
};
export default getProgression;
