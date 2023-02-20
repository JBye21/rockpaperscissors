function getComputerChoice() {

    let randomChoice = Math.floor(Math.random() * 3) + 1;

    if (randomChoice == 1) {
        return "rock"
    }
    else if (randomChoice == 2) {
        return "paper"
    }
    else (randomChoice == 3) 
        return "scissors"
}





function playRound(playerSelection, computerSelection) {

    if (computerResults.textContent == "5 CPU Wins") {
        winner.textContent = "Computer is the winner";
        computerResults.textContent = "0 CPU Wins"
        playerResults.textContent = "0 Player Wins"
    } 
    
    if (playerResults.textContent == "5 Human Wins") {
        winner.textContent = "Human is the winner";
        computerResults.textContent = "0 CPU Wins"
        playerResults.textContent = "0 Player Wins"
    }
    if (playerResults.textContent == "0 Human Wins" && computerResults.textContent=="0 CPU Wins") {
        winner.textContent = "undecided";
    }

    let player;
    let computer;

    if (playerSelection == "rock") {
        player = 1;
    } else if (playerSelection == "paper") {
        player = 2;
    } else if (playerSelection == "scissors") {
        player = 3;
    }

    if (computerSelection == "rock") {
        computer = 1;
    } else if (computerSelection == "paper") {
        computer = 2;
    } else if (computerSelection == "scissors") {
        computer = 3;
    }

        console.log(player)
        console.log(computer)

    if (player == computer) {
        return console.log("It's a tie!")
    }

    if (player == 1 && computer == 3 || player == 2 && computer == 1 || player == 3 && computer == 2) {

        return playerResults.textContent = parseInt(playerResults.textContent) + 1 + " Human Wins";

    }

    else return computerResults.textContent = parseInt(computerResults.textContent) + 1 + " CPU Wins";
    
    }





// make a button click turn into a game round with the button choice being used as your choice vs the computer


const rock = document.querySelector('#rock');

rock.addEventListener('click', function() {
    playRound("rock", getComputerChoice());
});

const paper = document.querySelector('#paper');

paper.addEventListener('click', function() {
    playRound("paper", getComputerChoice());
});


const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', function() {
    playRound("scissors", getComputerChoice());
});



// Make results show up live on the screen

const results = document.createElement('div');
results.classList.add('results');
results.textContent = 'Results';

document.body.appendChild(results)

const playerResults = document.createElement('div');
playerResults.classList.add('playerWins');
playerResults.textContent = "0 Human Wins";

results.appendChild(playerResults)

const computerResults = document.createElement('div');
computerResults.classList.add('computerWins')
computerResults.textContent = "0 CPU Wins";

results.appendChild(computerResults)

const winner = document.createElement('div');
winner.classList.add('winner');
results.appendChild(winner)


