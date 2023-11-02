import { useState } from 'react'
import './App.css'
import Board from './Board'
import GameMsg from './GameMsg';
import PlayAgainButton from './PlayAgainButton';
import ScoreBoard from './ScoreBoard';

function App() {
  const [gameOver, setGameOver] = useState(false);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState({
    player1: true,
    player2: false
  })

  const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    // Function to check for a winner
    const checkWinner = () => {
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          return;
        }
      }
    }; 

  return (
    <>
      <div>
        <ScoreBoard />
        <Board turn={turn} setTurn={setTurn} board={board} setBoard={setBoard} checkWinner={checkWinner}/>
        <GameMsg />
        <PlayAgainButton />
      </div>
    </>
  )
}

export default App
