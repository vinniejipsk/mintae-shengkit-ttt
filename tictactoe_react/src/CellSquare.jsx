import React from 'react';

function CellSquare({ value, onClick }) {
  return (
    <button className="cell" onClick={onClick}>
      {value}
    </button>
  );
}

export default CellSquare;
