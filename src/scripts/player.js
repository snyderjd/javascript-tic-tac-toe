const players = [
    {
        id: 1,
        turn: true
    },
    {
        id: 2,
        turn: false
    }
];

const changePlayer = () => {
    players.forEach(player => {
        if (player.turn === true) {
            player.turn = false;
        } else {
            player.turn = true;
        }
    });
};

const currentPlayer = () => {
    if (players[0].turn === true) {
        return `Player ${players[0].id}`;
    } else {
        return `Player ${players[1].id}`;
    }
};

const updateInstructions = () => {
    const instructions = document.querySelector('.instructions__text');

    if (currentPlayer() === 'Player 1') {
        instructions.innerHTML = "Player 1: Please click in an empty box to place an 'X'.";
    } else {
        instructions.innerHTML = "Player 2: Please click in an empty box to place an 'O'.";
    }
}