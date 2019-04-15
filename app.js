
//game variable


let min = 1,
    max = 10,
    winningNumber = getRandomNumber(min,max),
    guessesLeft = 3;


//random number generator
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

//UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

//assign min and max

minNum.textContent = min;
maxNum.textContent = max;

// reload  game
// game.addEventListener('mousedown',function(e){
// if(e.target.className === 'play-again'){
//     console.log(1);
// }
// });
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//listen on btn click

guessBtn.addEventListener('click',guessingGame);

//function definition
function guessingGame(){
    //gather inputvalue

    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number a between ${min} and ${max}`,'red');

    } else {

        //winning scenario
        if (guess === winningNumber){

            gameOver(true, `${winningNumber} is correct`)

         } else {
            guessesLeft -= 1;

            if (guessesLeft === 0){
                //Game Over
                gameOver(false, `Game over!. You lost, ${winningNumber} is the correct number`);
            } else {
                setMessage(`You have ${guessesLeft} guesses left`, 'grey');
            }

        }
    }





}

//game over funciton definition

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    //guessBtn.disabled = true;
    setMessage(msg,color);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

//funtion definition
function setMessage(msg,color){
        message.textContent = msg;
        message.style.color = color;
        guessInput.style.borderColor = color;

    }
