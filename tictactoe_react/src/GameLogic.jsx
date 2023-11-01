function GameLogic() {

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]; 
    
    const colorName = {
        '1': 'purple',
        '-1': 'orange',
        'null': 'white'
    }; 
    
    let board = Array(9).fill(null); 
    let turn = 1; 
    let winner = null;
    
    const cells = document.querySelectorAll('.cell');
    const message = document.querySelector('.message');
    const resetButton = document.querySelector('.reset');
    
    function renderBoard() {
        cells.forEach((cell, index) => {
            cell.textContent = board[index] === 1 ? 'X' : (board[index] === -1 ? 'O' : '');
            cell.style.color = board[index] === 1 ? colorName[1] : (board[index] === -1 ? colorName[-1] : '');
        });
    }
    
    function checkWinner() {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            } 
        } 
    
        if (!board.includes(null)) {
            return 'T';
        } 
    
        return null; 
    }
    
    function handleClick(index) {
        if (!board[index] && !winner) {

            board[index] = turn; 
            renderBoard();
            winner = checkWinner();
            renderMessage();

            if (!winner) {
                turn *= -1;
            } 
        }
    }
    
    // function renderMessage() {
    //     if (winner === 'T') {
    //         message.innerHTML = 'TIE! Play Again!';
    //     } else if (winner) {
    //         message.innerHTML = `<span style="color: ${colorName[winner]}">${colorName[winner].toUpperCase()}</span>, You're The Winner!`;
    //     } else {
    //         message.innerHTML = `It's <span style="color: ${colorName[turn]}">${colorName[turn].toUpperCase()}</span>'s Turn`;
    //     }
    // } USE IT FOR GameOverRender.jsx?!!!!!
    
    // cells.forEach((cell, index) => {
    //     cell.addEventListener('click', () => {
    //         handleClick(index);
    //     });
    // }); USE IT FOR CellSquare? or BoardRender.jsx!!!
    
    // resetButton.addEventListener('click', () => {
    //     initialize();
    // }); USE IT FOR PlayAgainRender.jsx!!!!!
}
