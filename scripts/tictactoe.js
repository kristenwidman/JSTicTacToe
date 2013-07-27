var symbol = 'X';
var moves = [0,0,0,0,0,0,0,0,0];
var wins = [ [0,3,6],[1,4,7],[2,5,8],
            [0,1,2],[3,4,5],[6,7,8],
            [0,4,8],[2,4,6] ];
isWon = false;

function updateMoves(square) {
    console.log("updating moves array");
    num = (symbol == 'X') ? 1 : -1;
    console.log("num is: " + num);
    moves[square.id] = num;
}

function checkIfDone() {
    console.log("checking if done");
    console.log("moves is: " + moves);
    for (var i=0; i < wins.length; i++) {
        win_combo = wins[i];
        console.log(i, moves[win_combo[0]], moves[win_combo[1]], moves[win_combo[2]]);
        console.log(Math.abs(moves[win_combo[0]] + moves[win_combo[1]] + moves[win_combo[2]]));
        if (Math.abs(moves[win_combo[0]] + moves[win_combo[1]] + moves[win_combo[2]]) == 3) {
            isWon = true;
            alert(symbol + ' has won!');
            break; //does this break out of for loop or just the if?
        }
    }
    if (moves.indexOf(0) == -1 && !isWon) { //all squares are occupied
        alert("Game over. You tied.");
    }
}

function makeMove(square) {
    console.log("make move called. symbol is " + symbol)
    if (!isWon) {
        //if square not chosen already
        if (square.value != 'X' && square.value != 'O') {
            //mark square as clicked
            square.value = symbol;
            console.log("square.value is now: " + square.value);
            //check for win
            updateMoves(square);
            checkIfDone();
            symbol = (symbol == 'X') ? 'O' : 'X';
        } else {
            alert("That square is already occupied. Please pick another.")
        }
    } else {
        alert("The game has already been won. Please start a new game.");
    }
}

function clearBoard() {
    console.log("Play again clicked");
    for (var i=0; i < moves.length; i++) {
        moves[i] = 0;
        document.getElementById(i).value = "  ";
    }
    isWon = false;
    symbol = 'X';
    console.log("moves is now: ", moves);
}

