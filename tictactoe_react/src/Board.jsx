import { useState } from "react";
import CellSquare from "./CellSquare";

function Board({turn, setTurn}) {

    const [board, setBoard] = useState(Array(9).fill(null));


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