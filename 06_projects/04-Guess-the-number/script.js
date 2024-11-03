const btn = document.getElementById('subt');
let inputField = document.querySelector('#guessField');
let random = ((Math.random()) * 100 + 1).toFixed(0)
let chanceLeft;
console.log(random)
const lowOrHi = document.querySelector('.lowOrHi')
const prevGuesses = document.querySelector('.guesses')
const displayContainer = document.querySelector('.resultParas')

const p = document.createElement('p')

let guesses = []
let limit = 10;

btn.addEventListener('click', function (e) {
    const guess = parseInt(inputField.value);
    e.preventDefault()
    console.log(guess)
    validateGuess(guess)
})

function validateGuess(guess) {
    if (limit == 0) {
        endGame('Game Over')
    } else if (!(isNaN(guess)) && guess < 100 && guess > 0 && guess !== '') {
        displayGuesses(guess)
        displayMessage('')
        checkGuess(guess)
    } else {
        guess.innerText = ''
        displayMessage('Invalid Input')
    }
}

function checkGuess(guess) {
    limit--;
    chanceLeft = document.querySelector('.lastResult')
    chanceLeft.innerText = limit
    if (guess == random) {
        //endGame()
        displayMessage('Your Guess is Correct')
    } else if (random > guess) {
        displayMessage('Wrong Guess. Your entry is Low')
    } else if (random < guess) {
        displayMessage('Wrong Guess. Your entry is High')
    }
}

function displayGuesses(guess) {
    prevGuesses.innerText += `${guess}, `
    guesses.push(guess)
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2 id = "message">${msg}</h2>`
}

function endGame(msg) {
    inputField.value = ''
    inputField.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">New Game</h2>`

    displayMessage(`${msg} Answer is ${random}`)
    displayContainer.appendChild(p)
    newGame()
}

function newGame() {
    const newGameText = document.getElementById('newGame');
    newGameText.addEventListener('click', function (e) {
        random = ((Math.random()) * 100 + 1).toFixed(0)
        inputField.removeAttribute('disabled')
        displayContainer.removeChild(p)
        prevGuesses.innerText = ''
        displayMessage('')
        chanceLeft.innerText = 10;
        limit = 10;
    })
}
