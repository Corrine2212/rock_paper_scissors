// Select the necessary HTML elements and store them in variables
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

// Create variables to store the user's choice, the computer's choice and game result
let userChoice;
let computerChoice;
let result;

// Add event listeners to each button in the 'possibleChoices' NodeList
// When a button is clicked, update the user's choice, generate the computer's choice, and get the game result.
possibleChoices.forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (event) => {
        userChoice = event.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResults();
    })
);

// Function to generate a random computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "paper";
    }
    if (randomNumber === 3) {
        computerChoice = "scissors";
    }
    // Display the computer's choice in the HTML
    computerChoiceDisplay.innerHTML = computerChoice;
}

// Function to determine the game result based on the user's and computer's choices
function getResults() {
    if (computerChoice === userChoice) { // if the choices are the same, it's a draw
        result = "it's a draw!";
    }
    if (computerChoice === "rock" && userChoice === "paper") { // if the user's choice beats the computer's choice, the user wins
        result = "you win!";
    }
    if (computerChoice === "rock" && userChoice === "scissors") { // if the computer's choice beats the user's choice, the computer wins
        result = "you lost!";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "you win!";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "you lose!";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "you win!";
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "you lose!";
    }
    // Display the game result in the HTML
    resultDisplay.innerHTML = result;
}
