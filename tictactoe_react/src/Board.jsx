import { useState } from "react";
import CellSquare from "./CellSquare";

function Board({ turn, setTurn, board, setBoard, checkWinner }) {
    

    return (
        <div className="board">
            {board.map((cell, index) => (
                <CellSquare
                key={index}
                value={cell}
                turn={turn}
                setTurn={setTurn}
                board={board}
                setBoard={setBoard}
                checkWinner={checkWinner}
                />
            ))}
        </div>
    )
}

export default Board