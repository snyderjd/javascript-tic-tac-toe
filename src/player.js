const players = [
    {
        id: 1,
        turn: true
    },
    {
        id: 2,
        turn: false
    }
]

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