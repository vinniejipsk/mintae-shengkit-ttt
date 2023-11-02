import { useState } from "react"

function CellSquare({ turn, setTurn }) {
    const [marker, setMarker] = useState(null);

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

    function handleClick(e) {
        const selectedCell = e.target;
        if (marker !== null) return;
        if (turn.player1) {
            setMarker('X');
            setTurn({player1: !turn.player1, player2: !turn.player2});
        } else if (turn.player2) {
            setMarker('O');
            setTurn({player1: !turn.player1, player2: !turn.player2});
        }

    }

    return (
        <div 
            className="cell" 
            onClick={handleClick}
        >{marker}</div>
    )
}

export default CellSquare