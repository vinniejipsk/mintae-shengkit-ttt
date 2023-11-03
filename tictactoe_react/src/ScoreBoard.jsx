import React from 'react';

function ScoreBoard({ score }) {
  return (
    <div className="score-board">
      <div>Player X: {score.X}</div> 
      <div>Player O: {score.O}</div>
    </div>
  );
}

export default ScoreBoard
