const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

function playGame() {
  rl.question('Guess the number (between 1 and 10): ', (guess) => {
    const userGuess = parseInt(guess);

    if (isNaN(userGuess)) {
      console.log('Please enter a valid number.');
    } else if (userGuess === secretNumber) {
      console.log('Congratulations! You guessed the correct number.');
      rl.close();
    } else {
      console.log('Wrong guess. Try again!');
      playGame();
    }
  });
}

console.log('Welcome to the Guessing Game!');
playGame();
