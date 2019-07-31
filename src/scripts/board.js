const squares = [
    {
        id: 1,
        value: ''
    },
    {
        id: 2,
        value: ''
    },
    {
        id: 3,
        value: ''
    },
    {
        id: 4,
        value: ''
    },
    {
        id: 5,
        value: ''
    },
    {
        id: 6,
        value: ''
    },
    {
        id: 7,
        value: ''
    },
    {
        id: 8,
        value: ''
    },
    {
        id: 9,
        value: ''
    }
];

const generateBoard = (array) => {

    array.forEach(square => {
        const squareHTML = generateSquare(square);
        addSquareToDOM(squareHTML);
    });

};

const generateSquare = (object) => {
    const squareHTML = `
        <section class="square square__${object.id}">
            <h2 class="letter">${object.value}</h2>
        <section>`
    return squareHTML;
    };

const addSquareToDOM = (HTMLString) => {
    const board = document.querySelector('.board');
    board.innerHTML += HTMLString;
};

const nextMark = () => {
    const player1 = players[0];

    if (player1.turn === true) {
        return 'X';
    } else {
        return 'O';
    }
};

const threeInARow = () => {
    let isWinning = false;

    let winCombos = [
        [squares[0].value, squares[1].value, squares[2].value],
        [squares[3].value, squares[4].value, squares[5].value],
        [squares[6].value, squares[7].value, squares[8].value],
        [squares[0].value, squares[3].value, squares[6].value],
        [squares[1].value, squares[4].value, squares[7].value],
        [squares[2].value, squares[5].value, squares[8].value],
        [squares[0].value, squares[4].value, squares[8].value],
        [squares[2].value, squares[4].value, squares[6].value],
    ];

    winCombos.forEach(combo => {
       if (combo[0] === "X" && combo[1] === "X" && combo[2] === "X") {           
            isWinning = true;
       } else if (combo[0] === "O" && combo[1] === "O" && combo[2] === "O") {
           isWinning = true;
       } 
    });

    return isWinning;
};

const checkGameOver = () => {
    let boardFull = false;

    if (threeInARow()) {
        window.alert(`${currentPlayer()} has won the game!`);
    } else if (squares.every(square => square.value != '')) {
        window.alert('Game over - its a tie!');
    }
};