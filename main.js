const weapons = ['rock','paper','scissors']

function getCompChoice () {
    let num = Math.floor(Math.random() * 3);
    let compChoice = weapons[num];
    return compChoice;
}

// function getPlayChoice () {
//     let playChoice = prompt("Enter your choice - 'r', 'p', or 's'?");
//     return playChoice;
// }

function playRound (playChoice) {
    let compChoice = getCompChoice();
    // let playChoice = getPlayChoice().toLowerCase();

    if (compChoice === playChoice) {
        roundResult.textContent =`You both drew with ${compChoice}`;
        gameScore("draw");
    } else if (compChoice === weapons[0] && playChoice === weapons[2]) {
        roundResult.textContent = "You lose! Rock beat scissors.";
        gameScore("lose");
    } else if (compChoice === weapons[0]  && playChoice === weapons[1]) {
        roundResult.textContent = "You win! Paper beat rock.";
        gameScore("win");
    } else if (compChoice === weapons[2]  && playChoice === weapons[1]) {
        roundResult.textContent = "You lose! Scissors beat paper.";
        gameScore("lose");
    } else if ( compChoice === weapons[2]  && playChoice === weapons[0]) {
        roundResult.textContent = "You win! Rock beats scissors";
        gameScore("win");
    } else if (compChoice === weapons[1]  && playChoice === weapons[0]) {
        roundResult.textContent = "You lose! Paper beats rock.";
        gameScore("lose");
    } else if (compChoice === weapons[1]  && playChoice === weapons[2]) {
        roundResult.textContent = "You win! Scissors beat paper";
        gameScore("win");
    }
}

function gameScore (outcome) {
    // SETS SCORE FROM WHAT'S ON RENDERED PAGE //
    let showPlayScore = playerScore.textContent;
    let showCompScore = compScore.textContent;

    // AMENDS SCORE FOR WIN OR LOSS //
    if (outcome === "win") {
        ++showPlayScore;
    } else if (outcome === "lose") {
        ++showCompScore;
    }
    
    // UPDATES RENDERED PAGE WITH NEW SCORE //
    playerScore.textContent = showPlayScore;
    compScore.textContent = showCompScore;


    // // EVALUATE SCORES AT GAME END DECLARE FINAL RESULT //
    // if (playScore > compScore) {
    //     return `FINAL SCORE: YOU - ${playScore}, COMP - ${compScore} - YOU WIN!!!`;
    // } else if (playScore < compScore) {
    //     return `FINAL SCORE: YOU - ${playScore}, COMP - ${compScore} - YOU LOSE!!!`;
    // } else {
    //     return `FINAL SCORE: YOU - ${playScore}, COMP - ${compScore} - DRAW.`;
    // }
}

// SELECTORS //
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');

// EVENT LISTENER //
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});
