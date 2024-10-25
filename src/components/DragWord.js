// src/components/DragWord.js
import React from 'react';

const DragWord = ({ word, color, onDragStart }) => {
  return (
    <div
      className={`draggable ${color === 'red' ? 'red' : ''}`}
      draggable
      onDragStart={(e) => onDragStart(e, word)}
      style={{
        border: "1px solid #b7b7b7",
        padding: "5px",
        margin: "5px",
        cursor: "pointer",
        borderRadius: "5px",
        minWidth: "64px",
        display: "inline-flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        minHeight: "20px",
      }}
    >
      {word}
    </div>
  );
};

export default DragWord;
