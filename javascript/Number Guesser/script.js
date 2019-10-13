let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random()*10);
}

function compareGuesses(human, confuser, secret) {
    let humanWins = null;
    //Calculate difference between user and target
    let humanDiff = Math.abs(target - human);
    let compDiff = Math.abs(target - confuser);

    /*I think that true and false is a poor (counter-intuitive) design choice
    for determining who wins a game but that is part of the project spec.*/

    if (humanDiff <= compDiff) {
        humanWins = true;
    } else {//Ties are thrown for the human player
        humanWins = false;
    }
    return humanWins;
