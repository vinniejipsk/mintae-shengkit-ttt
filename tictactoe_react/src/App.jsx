import { useState } from 'react'
import './App.css'
import Board from './Board'
import GameMsg from './GameMsg';
import PlayAgainButton from './PlayAgainButton';
import ScoreBoard from './ScoreBoard';

function App() {
  const [gameOver, setGameOver] = useState(false);

  return (
    <>
      <div>
        <ScoreBoard />
        <Board />
        {/* {gameOver ? <GameMsg /> : null}
        {gameOver ? <PlayAgainButton /> : null} */}
        <GameMsg />
        <PlayAgainButton />
      </div>
    </>
  )
}

export default App
