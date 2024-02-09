import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const result = `Hello, ${name}!`;
  console.log(result);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Question: 15');
  const answer1 = readlineSync.question('Your answer: ');
  if (answer1 === 'no') {
    console.log('Correct!');
  } else {
    return `'${answer1}' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`;
  }
  console.log('Question: 6');
  const answer2 = readlineSync.question('Your answer: ');
  if (answer2 === 'yes') {
    console.log('Correct!');
  } else {
    return `'${answer2}' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`;
  }
  console.log('Question: 7');
  const answer3 = readlineSync.question('Your answer: ');
  if (answer3 === 'no') {
    console.log('Correct!');
  } else {
    return `'${answer3}' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`;
  }
  return `Congratulations, ${name}!`;
};
export default isEven;
