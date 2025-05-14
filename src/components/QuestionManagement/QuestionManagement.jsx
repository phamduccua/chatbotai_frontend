import React, { useState } from 'react';
import './QuestionManagement.css';

const QuestionManagement = ({ onClose }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);
  const [chapter, setChapter] = useState('1');
  const [difficulty, setDifficulty] = useState('Dễ');

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement question submission logic
    console.log({
      question,
      options,
      correctOption,
      chapter,
      difficulty
    });
    onClose(); // Close the form after submission
  };

  return (
    <div className="question-management">
      <div className="modal-header">
        <h2>Thêm câu hỏi trắc nghiệm</h2>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nội dung câu hỏi:</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Các đáp án:</label>
          {options.map((option, index) => (
            <div key={index} className="option-row">
              <input
                type="radio"
                name="correctOption"
                checked={correctOption === index}
                onChange={() => setCorrectOption(index)}
              />
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Đáp án ${String.fromCharCode(65 + index)}`}
                required
              />
            </div>
          ))}
        </div>

        <div className="form-settings">
          <div className="setting">
            <label>Chương:</label>
            <select value={chapter} onChange={(e) => setChapter(e.target.value)}>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>Chương {num}</option>
              ))}
            </select>
          </div>

          <div className="setting">
            <label>Độ khó:</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option>Dễ</option>
              <option>Trung bình</option>
              <option>Khó</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={onClose}>Hủy</button>
          <button type="submit" className="btn-save">Lưu</button>
        </div>
      </form>
    </div>
  );
};

export default QuestionManagement;
