import { useState } from "react";

function CellSquare({ turn, setTurn, board, setBoard, checkWinner, index }) {
  const [value, setValue] = useState(null);

  function handleClick(e) {
    if (value !== null) return;
    if (turn.player1) {
      setValue("X");
      setTurn({ player1: !turn.player1, player2: !turn.player2 });
    } else if (turn.player2) {
      setValue("O");
      setTurn({ player1: !turn.player1, player2: !turn.player2 });
    }

    // Check for a winner after each click
    checkWinner();
  }

  return (
    <div className="cell" onClick={handleClick} data-index={index}>
      {value}
    </div>
  );
}

export default CellSquare;