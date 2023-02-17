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
        return "It's a tie!"
    }

    if (player == 1 && computer == 3 || player == 2 && computer == 1 || player == 3 && computer == 2) {

        return 1

    }

    else return 0
 
}


function game() {

    let playerwins = 0;
    let computerwins = 0;

    for (let i = 0; i < 5; i++) {

        let round = playRound(prompt("R P or S?"), getComputerChoice())
        
        if (round == 1) {
            playerwins = playerwins + 1
        } else if (round == "It's a tie!") {
            continue
        } else {
            computerwins = computerwins + 1
        }

    }

    console.log(playerwins)
    console.log(computerwins)

    if (playerwins > computerwins) {
        return "You won the game!"
    } else if (playerwins == computerwins) {
        return "You tied."
    } else {
        return "You lost the game."
    }

}




console.log(game())