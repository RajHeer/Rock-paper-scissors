const weapons = ['r','p','s']

function getCompChoice () {
    let num = Math.floor(Math.random() * 3);
    let compChoice = weapons[num];
    console.log(compChoice);
}
