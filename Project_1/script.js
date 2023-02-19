'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;


document.querySelector('.check').addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);


// NO INPUT
    if(!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число';
       

    }
    
    // PLAYER WON
    
    else if(guessingNumber === secretNumber) {

        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'lime';
        document.querySelector('.question').style.width = '50rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } 

    // TO0 HIGHT 

    else if(guessingNumber > secretNumber) {

        if (score > 1) {

            document.querySelector('.guess-message').textContent = 'Много';
            score--;
            document.querySelector('.score').textContent = score;

        } else {

            document.querySelector('.guess-message').textContent = 'КОНЕЦ ИГРЫ';

        }
    }  
    
    // TOO LOW
    
    else if(guessingNumber < secretNumber) {

        if(score > 1) {

            document.querySelector('.guess-message').textContent = 'Мало';
            score--;
            document.querySelector('.score').textContent = score;

        } else {

            document.querySelector('.guess-message').textContent = 'КОНЕЦ ИГРЫ';

            document.querySelector('.score').textContent = 0;

        }

        

    }

})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;

    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';

    document.querySelector('.question').style.width = '25rem';

    document.querySelector('.question').textContent = '???';

    document.querySelector('.guess-message').textContent = 'Начни угадывать';

    document.querySelector('.score').textContent = score;

    document.querySelector('.number-input').value = '';

    
})
