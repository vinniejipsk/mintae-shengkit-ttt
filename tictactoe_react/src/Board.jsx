import { useState } from "react";
import CellSquare from "./CellSquare";

function Board() {

    const [turn, setTurn] = useState({
        player1: true,
        player2: false
      })

    // const [cellData, setCellData] = useState(null);


    return (
        <div className="board">
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />
            <CellSquare turn={turn} setTurn={setTurn} />

        </div>
        // will do a autofill to 9 cells.
    )
}

export default Board