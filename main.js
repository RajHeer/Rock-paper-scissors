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
        return "draw";
    } else if (compChoice === weapons[0] && playChoice === weapons[2]) {
        roundResult.textContent = "You lose! Rock beat scissors.";
        return "lose";
    } else if (compChoice === weapons[0]  && playChoice === weapons[1]) {
        roundResult.textContent = "You win! Paper beat rock.";
        return "win";
    } else if (compChoice === weapons[2]  && playChoice === weapons[1]) {
        roundResult.textContent = "You lose! Scissors beat paper.";
        return "lose";
    } else if ( compChoice === weapons[2]  && playChoice === weapons[0]) {
        roundResult.textContent = "You win! Rock beats scissors";
        return "win";
    } else if (compChoice === weapons[1]  && playChoice === weapons[0]) {
        roundResult.textContent = "You lose! Paper beats rock.";
        return "lose";
    } else if (compChoice === weapons[1]  && playChoice === weapons[2]) {
        roundResult.textContent = "You win! Scissors beat paper";
        return "win";
    }
}

// function game () {
//     let playScore = 0;
//     let compScore = 0;

//     // PLAY ROUNDS AND TALLY WINS AND LOSSES //
//     for (let i = 0; i < 5 ; i++) {
//         let result = playRound();
//         if (result === "win") {
//             ++playScore;
//         } else if (result === "lose") {
//             ++compScore;
//         }
//         console.log(`SCORE: YOU - ${playScore}, COMP - ${compScore}`);
//     }

//     // EVALUATE SCORES AT GAME END DECLARE FINAL RESULT //
//     if (playScore > compScore) {
//         return `FINAL SCORE: YOU - ${playScore}, COMP - ${compScore} - YOU WIN!!!`;
//     } else if (playScore < compScore) {
//         return `FINAL SCORE: YOU - ${playScore}, COMP - ${compScore} - YOU LOSE!!!`;
//     } else {
//         return `FINAL SCORE: YOU - ${playScore}, COMP - ${compScore} - DRAW.`;
//     }
// }

// SELECTORS //
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');

// EVENT LISTENER //
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});
