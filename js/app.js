/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];
// smiller to node list and the better to use is object

/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice; 
let msg;

/*------------------------ Cached Element References ------------------------*/

// i can choose selectorAll
const rockBtnEl = document.querySelector('#rock');
const paperBtnEl = document.querySelector('#paper');
const scissorsBtnEl = document.querySelector('#scissors');
const resultDisplayEl = document.querySelector('#result-display');
const resetBtnEl = document.querySelector('#resetButton');

/*-------------------------------- Functions --------------------------------*/

function getComputerChoice(){
    // generarete a random number from 0-2
    const randomIndex = Math.floor(Math.random()* choices.length); //or put 3 instead of lenght

    // slect the item form array
    return choices[randomIndex]; 
}

// intialize game state
function play(event){
    computerChoice = getComputerChoice();
    playerChoice = event.target.id;

    // after updating state, render to html
    compare();
    render();
}


// updates our UI/html directly
function render(){
    resultDisplayEl.textContent = `Computer chose ${computerChoice} and 
    you chose ${playerChoice}, ${msg}`;

}

function compare() {
    if (playerChoice === computerChoice) {
        msg = 'You tied!'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        msg = 'You win!'
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        msg = 'You lose!'
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        msg = 'You win!'
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        msg = 'You lose!'
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        msg = 'You win!'
    } else {
        msg = 'You lose!'
    }
    // else if (playerChoice === 'rock') {
    //     if (computerChoice === 'paper') {
    //         msg = 'You Lose!'
    //     } else if (computerChoice === 'scissors') {
    //         msg = 'You win!'
    //     }
    // }
}

function resetGame() {
    resultDisplayEl.textContent = ''
    playerChoice = null
    computerChoice = null
}

/*----------------------------- Event Listeners -----------------------------*/

//with () immediaty will run without event
rockBtnEl.addEventListener('click', play);
paperBtnEl.addEventListener('click', play);
scissorsBtnEl.addEventListener('click', play);
resetBtnEl.addEventListener('click', resetGame);