const weapons = ['r','p','s']

function getCompChoice () {
    let num = Math.floor(Math.random() * 3);
    let compChoice = weapons[num];
    return compChoice;
}

function getPlayChoice () {
    let playChoice = prompt("Enter your choice - 'r', 'p', or 's'?");
    return playChoice;
}

function playRound () {
    let compChoice = getCompChoice();
    let playChoice = getPlayChoice().toLowerCase();

    if (compChoice === playChoice) {
        console.log(`You both drew with ${compChoice}`);
        return "draw";
    } else if (compChoice === weapons[0] && playChoice === weapons[2]) {
        console.log("You lose! Rock beat scissors.");
        return "lose";
    } else if (compChoice === weapons[0]  && playChoice === weapons[1]) {
        console.log("You win! Paper beat rock.");
        return "win";
    } else if (compChoice === weapons[2]  && playChoice === weapons[1]) {
        console.log("You lose! Scissors beat paper.");
        return "lose";
    } else if ( compChoice === weapons[2]  && playChoice === weapons[0]) {
        console.log("You win! Rock beats scissors");
        return "win";
    } else if (compChoice === weapons[1]  && playChoice === weapons[0]) {
        console.log("You lose! Paper beats rock.");
        return "lose";
    } else if (compChoice === weapons[1]  && playChoice === weapons[2]) {
        console.log("You win! Scissors beat paper");
        return "win";
    }
}

function game () {
    let playScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5 ; i++) {
        let result = playRound();
        if (result === "win") {
            ++playScore;
        } else if (result === "lose") {
            ++compScore;
        }
        console.log(`SCORE: YOU - ${playScore}, COMP - ${compScore}`);
    }
    console.log(`FINAL SCORE: YOU - ${playScore}, COMP - ${compScore}`);
}
