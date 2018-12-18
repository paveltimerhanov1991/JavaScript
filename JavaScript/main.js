const guessField =
document.querySelector('.guessField');
const guessSubmit =
document.querySelector('.guessSubmit');
const guesses =
document.querySelector('.guesses');
const lastResult =
document.querySelector('.lastResult');
const lowOrHigh = 
document.querySelector('.lowOrHigh');

let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100)+ 1;
let resetButton;

const guessCheck = () => {
  let userGuess = Number(guessField.value);
  console.log('you pressed a button');
    
    if (guessCount === 1){
        guesses.textContent = 'previous guesses: ';
    }
    
    guesses.textContent += `${userGuess} ` ;
    // kui kasutaja pakub kohe õigesti
    if (userGuess === randomNumber) {
        lastResult.textContent = 'You guessed correct';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    // kasutajal lubatud kogus pakkumisi    
    } else if (guessCount === 10) {
        lastResult.textContent = 'game over';
        lowOrHigh.textContent = '';
        setGameOver();
        
    } else {
        lastResult.textContent = 'Wrong guess';
        lastResult.style.backgroundColor = 'red';
        
        // kui number liiga madal
        
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'your guess is too low';
            
            // kui number on liiga kõrge
            
            } else if (userGuess > randomNumber) {
                lowOrHigh.textContent = 'your guess is too high';
            
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click', guessCheck);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new game?';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length ; i++){
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ' ';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}