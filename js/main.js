// Constants //
const COLORS = {
    '1': 'black',
    '-1': 'white',
    'null': 'grey'
};

const WINNING_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


// State Variables//
let board, turn, winner;


// Cached Elements //
let squares = document.querySelectorAll('td div');


// Event Listeners //
document.querySelector('table').addEventListener('click', handleMove);


// Functions //
init();

function handleMove(evt) {
    // get the index of the square //
    let idx = parseInt(evt.target.id.replace('sq', ''));
    console.log(idx);

   ///check if square is taken, return if it is //
   if (board[idx])  return;

   //set value to current player and switch turns //
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();

    // Todo: check for a winner //
    render();

} 

function getWinner() {
    // big if statement , checking the 8 possibilities //
   
    for(let i = 0; i < WINNING_COMBOS.length; i++) {
        if(Math.abs(
            board[WINNING_COMBOS[i][0]] +
            board[WINNING_COMBOS[i][1]] + 
            board[WINNING_COMBOS[i][2]]) === 3 ) {
                return board[WINNING_COMBOS[i][0]]
            }
    }

    if (board.includes(null)) return null;
    return 'T';
}


function render() {
    // loop over the board //
    board.forEach(function(sqr, idx) {
    
    
    //for each square, change the bg color to one of the values in COLORS //
    squares[idx].style.backgroundColor = COLORS[sqr];
});
    //TODO: Add in a win logic //
    if (winner === 'T') {
        alert('Meow, You\'ve got a cat\'s game');
    } else if (winner) {
        alert(`Ya crushed it bruh ${COLORS[winner]}`);
    } else {
        alert(`now it's ${COLORS[turn]}'s turn`)
    }
}

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    // alternatively - board = new Array(9).fill(null) //
    turn = 1;
    winner = null;
    render();
}


