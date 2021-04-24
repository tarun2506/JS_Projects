/*Game Function:
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of  guesses remaining 
-Notify player of the correct answer if loose
-Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
  

//Ui Elements
const UiGame = document.querySelector('#game'),
      UiMinNum = document.querySelector('.min-num'),
      UiMaxNum = document.querySelector('.max-num'),
      UiGuessBtn = document.querySelector('#guess-btn'),
      UiGuessInput = document.querySelector('#guess-input'),
      UiMessage = document.querySelector('.message');

//Assign Ui min and max
UiMinNum.textContent = min;
UiMaxNum.textContent = max;

//Play again event listener
UiGame.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});



//Listen for guess
UiGuessBtn.addEventListener('click', function(){
  let guess = parseInt(UiGuessInput.value);

  //validate our input
  if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true, `${winningNum} is correct!, YOU WIN!`);
  }else{
    //Wrong number
    guessesLeft -= 1;

    if(guessesLeft===0){
      // game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
    }else{
      // Gamee Continues - answer wrong
      //Change the border green
      UiGuessInput.style.borderColor = 'red';
      //clear Input
      UiGuessInput.value = '';
      //Set message
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
})

//game over 
function gameOver(won, mssg){
  let color;
  won === true ? color = 'green' : color = 'red';
  //Disable input
  UiGuessInput.disabled = true;
  //Change the border green
  UiGuessInput.style.borderColor = color;
  //Set message
  setMessage(mssg, color);
  
  //Play again
  UiGuessBtn.textContent = 'Play Again';
  UiGuessBtn.className += 'play-again';

}

//Get Random number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Set Message
function setMessage(msg,color){
  UiMessage.style.color = color;
  UiMessage.textContent = msg;
}

