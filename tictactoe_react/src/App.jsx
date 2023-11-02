import { useState } from 'react'
import './App.css'
import Board from './Board'
import GameMsg from './GameMsg';
import PlayAgainButton from './PlayAgainButton';
import ScoreBoard from './ScoreBoard';

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  // const [marker, setMarker] = useState(null);
  const [turn, setTurn] = useState({
    player1: true,
    player2: false
  })

  return (
    <>
      <div>
        <ScoreBoard />
        <Board turn={turn} setTurn={setTurn} />
        {/* {gameOver ? <GameMsg /> : null}
        {gameOver ? <PlayAgainButton /> : null} */}
        <GameMsg winner={winner} turn={turn} />
        <PlayAgainButton />
      </div>
    </>
  )
}

export default App
