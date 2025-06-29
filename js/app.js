/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];
// smiller to node list and the better to use is object

/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice; 
let msg;

/*------------------------ Cached Element References ------------------------*/
const rockbtnElement = document.querySelector('#rock');
const paperbtnElement = document.querySelector('#paper');
const scissorsbtnElement = document.querySelector('#scissors');


/*-------------------------------- Functions --------------------------------*/

function getComputerChoice(){
    // generarete a random number from 0-2
    const randomIndex = Math.floor(Math.random()* choices.length); //or put 3 instead of lenght

    // slect the item form array
    return choices[randomIndex]; 
}

// intialize game state
function play(){
    computerChoice = getComputerChoice();
    console.log("computerChoice",computerChoice);
    computerChoice = getComputerChoice();
    console.log("computerChoice",computerChoice);


    // after updating state, render to html
    render();
}

play();

// updates our UI/html directly
function render(){

}

/*----------------------------- Event Listeners -----------------------------*/