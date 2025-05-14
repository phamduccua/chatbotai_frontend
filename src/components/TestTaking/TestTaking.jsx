import React, { useState } from 'react';
import './TestTaking.css';

const TestTaking = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // Mock test data - this would come backend
  const mockQuestion = {
    question: "Trong ma trận kề của đồ thị vô hướng gồm m cạnh, tổng các phần tử của ma trận bằng bao nhiêu ?",
    options: [
      { id: 'A', text: 'm' },
      { id: 'B', text: 'm + 1' },
      { id: 'C', text: 'm - 1' },
      { id: 'D', text: '2m' }
    ],
    chapter: 1,
    difficulty: 'Dễ'
  };

  const handleSubmit = () => {
    // TODO: Implement answer submission logic
    console.log('Selected answer:', selectedAnswer);
  };

  return (
    <div className="test-taking">
      <div className="question-card">
        <div className="question-header">
          <span className="chapter">Chương {mockQuestion.chapter}</span>
          <span className="difficulty">Độ khó: {mockQuestion.difficulty}</span>
        </div>

        <div className="question-content">
          <h3>{mockQuestion.question}</h3>
          
          <div className="options-list">
            {mockQuestion.options.map((option) => (
              <div
                key={option.id}
                className={`option ${selectedAnswer === option.id ? 'selected' : ''}`}
                onClick={() => setSelectedAnswer(option.id)}
              >
                <span className="option-label">{option.id}</span>
                <span className="option-text">{option.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="question-footer">
          <button onClick={handleSubmit} disabled={!selectedAnswer}>
            Nộp câu trả lời
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestTaking;
