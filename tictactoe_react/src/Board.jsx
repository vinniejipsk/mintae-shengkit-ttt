import { useState } from "react";
import CellSquare from "./CellSquare";

function Board() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState({
        player1: true,
        player2: false
      })

    return (
        <div className="board">
            {board.map((cell, index) => (
                <CellSquare
                key={index}
                value={cell}
                turn={turn}
                setTurn={setTurn}
                />
            ))}
        </div>
    )
}

export default Board