import readlineSync from 'readline-sync';

const brainGames = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  console.log(rule);
  const countQuestions = 3;
  for (let i = 0; i < countQuestions; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (`${correctAnswer}` !== answer) {
      const wrongAnswer = console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
      return wrongAnswer;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainGames;
