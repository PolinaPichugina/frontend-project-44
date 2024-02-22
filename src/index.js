import readlineSync from 'readline-sync';

const COUNT_QUESTIONS = 3;
const brainGames = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  console.log(rule);
  for (let i = 0; i < COUNT_QUESTIONS; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${correctAnswer}` !== answer) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
export default brainGames;
