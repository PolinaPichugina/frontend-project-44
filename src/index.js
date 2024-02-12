import readlineSync from 'readline-sync';

const brainGames = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      const wrongAnswer = console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
      return wrongAnswer;
    }
  }
  const end = console.log(`Congratulations, ${name}!`);
  return end;
};
export default brainGames;
