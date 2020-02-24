// Rock, paper, scissors game

var playerOne = prompt("Player One:");

function game(playerOne) {
    var x = Math.round(Math.random() * 10); // getting a random number between 1 and 10
    // if 0-3 = rock
    // if 4-6 = paper
    // if 7-10 = scissors
    if (x <= 3) {
        var machinePlayer = "rock";
        if (playerOne === "paper") {
            console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
        } else if (playerOne === "scissors") {
            console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
        } else if (playerOne === machinePlayer) {
            console.log(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
        }
    } else if (x <= 6) {
        var machinePlayer = "paper";
        if (playerOne === "rock") {
            console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
        } else if (playerOne === "scissors") {
            console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
        } else if (playerOne === machinePlayer) {
            console.log(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
        }
    } else {
        var machinePlayer = "scissors";
        if (playerOne === "rock") {
            console.log(`✅ you: ${playerOne}, machine: ${machinePlayer}`);
        } else if (playerOne === "paper") {
            console.log(`❌ you: ${playerOne}, machine: ${machinePlayer}`);
        } else if (playerOne === machinePlayer) {
            console.log(`DRAW ⚠ you: ${playerOne}, machine: ${machinePlayer}`);
        }

    }
}

game(playerOne);
