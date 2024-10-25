// src/App.js
import React, { useState } from 'react';
import './App.css';
import dataFromBackend from './data.json';
import DragWord from './components/DragWord';
import Paragraph from './components/Paragraph';
import Result from './components/Result';

function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");
  const [isCheckColor, setIsCheckColor] = useState(false);

  const [resultText, setResultText] = useState(dataFromBackend.question.paragraph);
  const [disabled, setDisabled] = useState({});

  const handleDrop = (e, blankId) => {
    e.preventDefault();
    const draggedWord = e.dataTransfer.getData("text");

    const correctAnswer = dataFromBackend.question.blanks.find(blank => blank.id === blankId).correctAnswer;
    if (draggedWord === correctAnswer) {
      setAnswers(prev => ({ ...prev, [blankId]: draggedWord }));
      setDisabled(prev => ({ ...prev, [blankId]: true }));
    }
  };

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("text", word);
  };

  const handleSubmit = () => {
    setIsCheckColor(true);
    const { blanks } = dataFromBackend.question;
    let isCorrect = true;
    blanks.forEach((blank) => {
      if (answers[blank.id] !== blank.correctAnswer) {
        isCorrect = false;
      }
    });
    setResult(isCorrect ? "Chính xác!" : "Sai rồi!");

    setTimeout(() => {
      if (!isCorrect) {
        setIsCheckColor(false);
        setAnswers({})
      }
    }, 1000);

  };

  return (
    <div className="App">
      <h2>Kéo thả từ vào chỗ trống trong câu:</h2>
      <Paragraph
        paragraph={resultText}
        blanks={dataFromBackend.question.blanks}
        answers={answers}
        onDrop={handleDrop}
        isCheckColor={isCheckColor}
        setAnswers={setAnswers}
        disabled={disabled}
      />

      <div className="draggable-container">
        {dataFromBackend.question.dragWords.map((wordObj) => (
          <DragWord
            key={wordObj.id}
            word={wordObj.word}
            color={wordObj.color}
            onDragStart={handleDragStart}
          />
        ))}
      </div>

      <button onClick={handleSubmit} className='btn'>Submit</button>
      <Result result={result} />
    </div>
  );
}

export default App;
