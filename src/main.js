generateBoard(squares);

const board = document.querySelector('.board');

board.addEventListener('click', (event) => {
    const clickedItemClass = event.target.classList[0];
    const clickedItem = event.target;
    const squareNumberString = event.target.classList[1].split('__')[1];
    const squareNumber = parseInt(squareNumberString, 10);
    
    if (clickedItemClass === 'square') {
        const squareElement = clickedItem.childNodes[1];
    
        // Iterate over squares array and update the value of the appropriate square
        squares.forEach(square => {
            if (square.id === squareNumber && square.value === '') {
                let nextSymbol = nextMark();
                squareElement.innerHTML = nextSymbol;
                square["value"] = nextSymbol;
            }
        });

        checkGameOver();
        changePlayer();

    }

});