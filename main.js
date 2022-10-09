const weapons = ['r','p','s']

function getCompChoice () {
    let num = Math.floor(Math.random() * 3);
    let compChoice = weapons[num];
    return compChoice;
}

function getPlayChoice () {
    let playChoice = prompt("Enter your choice - 'r', 'p', or 's'?");
    console.log(playChoice);
}
