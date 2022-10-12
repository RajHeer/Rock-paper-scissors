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
    //  NOTE SCORE FROM WHAT'S ON RENDERED PAGE //
    let showPlayScore = playerScore.textContent;
    let showCompScore = compScore.textContent;

    // AMENDS SCORE FOR WIN OR LOSS //
    if (outcome === "win") {
        ++showPlayScore;
    } else if (outcome === "lose") {
        ++showCompScore;
    };
    
    // UPDATES RENDERED PAGE WITH NEW SCORE //
    playerScore.textContent = showPlayScore;
    compScore.textContent = showCompScore;

    // EVALUATE SCORES DECLARE FINAL RESULT WHEN SCORE = 5//
    if (showPlayScore === 5) {
        finalResult.textContent = "YOU WIN THE BATTLE!!!";
        setTimeout(reset, 2000);
    } else if (showCompScore === 5) {
        finalResult.textContent = "YOU LOSE THE BATTLE!!!";
        setTimeout(reset, 2000);
    }
}

// RESETS THE GAME, CALLED IN gameSCORE () with timeout //
function reset () {
    roundResult.textContent = "Do BATTLE AGAIN!!!";
    playerScore.textContent = 0;
    compScore.textContent = 0;
    finalResult.textContent = "Fight until FIVE points!!!";
}

// SELECTORS //
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const finalResult = document.querySelector('.finalResult');

// EVENT LISTENER //
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});
