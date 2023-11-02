import React, { useState } from 'react';
import './App.css';
import Board from './Board';
import PlayAgainButton from './PlayAgainButton';
import ScoreBoard from './ScoreBoard';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const handleWin = (player) => {
    setWinner(player);
    setScore({ ...score, [player]: score[player] + 1 });
  };

  return (
    <div className="App">
      {/* <ScoreBoard /> */}
      <Board
        board={board}
        setBoard={setBoard}
        turn={turn}
        setTurn={setTurn}
        winner={winner}
        handleWin={handleWin}
        />
        {/* {gameOver ? <GameMsg /> : null}
        {gameOver ? <PlayAgainButton /> : null} */}
      {/* <PlayAgainButton /> */}
    </div>
  );
}

export default App;
