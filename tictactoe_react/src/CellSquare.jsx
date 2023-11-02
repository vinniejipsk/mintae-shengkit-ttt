import { useState } from "react"

function CellSquare({ turn, setTurn }) {

    const [value, setValue] = useState(null);

    function handleClick(e) {
        const selectedCell = e.target;
        if (value !== null) return;
        if (turn.player1) {
            setValue('X');
            setTurn({player1: !turn.player1, player2: !turn.player2});
        } else if (turn.player2) {
            setValue('O');
            setTurn({player1: !turn.player1, player2: !turn.player2});
        }


    }

    return (
        <div 
            className="cell" 
            onClick={handleClick}
        >{value}</div>
    )
}

export default CellSquare