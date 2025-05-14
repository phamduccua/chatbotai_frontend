import React from 'react';
import Header from '../Header/Header';
import TestTaking from '../TestTaking/TestTaking';
import './PracticePage.css';

const PracticePage = () => {
  return (
    <div className="practice-page">
      <Header />
      <div className="practice-container">
        <nav className="practice-nav">
          <ul>
            <li className="active"><a href="#practice">Bài tập trắc nghiệm</a></li>
            <li><a href="#results">Kết quả</a></li>
            <li><a href="#history">Lịch sử làm bài</a></li>
          </ul>
        </nav>
        <div className="practice-content">
          <h1>Bài tập trắc nghiệm</h1>
          <TestTaking />
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
