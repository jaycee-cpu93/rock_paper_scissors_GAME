//paper, rock, scissors
/* Four(4) scenarios of the game.
1. Rock will always beat scissor,
2. Scissor will always beat paper,
3. Paper will always beat rock.
4. Tie whereby it could scissor scissor,  rock, rock and  paper, paper. */


items = ["rock", "paper", "scissors"];
function computerPlay() {
    let pickRandomly = Math.floor(Math.random() * items.length);
    if (pickRandomly == 0) {
        return items[0];
    } else if (pickRandomly == 1) {
        return items[1];
    } else {
        return items[2];
    }
}
//console.log(computerPlay());


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You lose! Paper beats rock.";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You lose! Scissors beats paper.";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You lose! Rock beats scissors.";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You win! Rock beats scissors.";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You win! Paper beats rock.";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You win! Scissors beats paper.";
    } else if (playerSelection == computerSelection) {
        return "It's a Draw!";
    } else if ((playerSelection != "rock") || (playerSelection != "paper") || (playerSelection != "scissors")) {
        return "Enter a valid selection!";
    } else {
        return "Invalid selection!";
    }
}
//const  playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

//real game with a computer, play 5 rounds between player and computer before declaring the winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("ROUND " + (i + 1) +"\n"+ "Enter your choice: rock, paper, scissors");
        let computerSelection = computerPlay();
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        if (result == "You win! Rock beats scissors.") {
            console.log(result);
            playerScore++; //playerScore = playerScore + 1;
        } else if (result == "You win! Paper beats rock.") {
            console.log(result);
            playerScore++;
        } else if (result == "You win! Scissors beats paper.") {
            console.log(result);
            playerScore++;
        } else if (result == "You lose! Paper beats rock.") {
            console.log(result);
            computerScore++; //computerScore = computerScore + 1;
        } else if (result == "You lose! Rock beats scissors.") {
            console.log(result);
            computerScore++;
        } else if (result == "You lose! Scissors beats paper.") {
            console.log(result);
            computerScore++;
        } else if (result == "It's a Draw!") {
            console.log(result);
        } else if (result == "Enter a valid selection!") {
            console.log(`${result} Either enter rock, paper or scissors!`); 
        } else {
            console.log("Invalid selection!");
        }
       
    }
    if (playerScore > computerScore) {
        console.log(`You win the final game! Your score: ${playerScore} :: Computer the final loses! Computer score: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins the final game! Computer score: ${computerScore} :: You lose the final! Your score: ${playerScore}`);
    } else if (playerScore == computerScore) {
        console.log(`It's a Draw! No winner! Your score: ${playerScore} :: Computer score: ${computerScore}, Please play again!`);
    } else {
        console.log("Invalid selection!");
    }
}
game();