import React, { useState } from 'react';
import './ToolsSection.css';
import QuestionManagement from '../QuestionManagement/QuestionManagement';

const ToolButton = ({ icon, label, onClick }) => (
  <button className="tool-button" onClick={onClick}>
    <span className="material-symbols-outlined">{icon}</span>
    <span>{label}</span>
  </button>
);

const ToolsSection = () => {
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleToolClick = (toolLabel) => {
    if (toolLabel === 'Tạo bài tập') {
      setShowQuestionForm(true);
    }
    // Handle other tools as needed
  };

  const tools = [
    { icon: 'add_circle', label: 'Tạo bài tập' },
    { icon: 'assessment', label: 'Thống kê' },
    { icon: 'calendar_month', label: 'Lịch' },
    { icon: 'group_add', label: 'Thêm lớp' },
  ];

  return (
    <div className="tools-section">
      <h2>Công cụ</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <ToolButton 
            key={index} 
            icon={tool.icon} 
            label={tool.label} 
            onClick={() => handleToolClick(tool.label)}
          />
        ))}
      </div>

      {showQuestionForm && (
        <div className="question-form-overlay" onClick={() => setShowQuestionForm(false)}>
          <div className="question-form-container" onClick={e => e.stopPropagation()}>
            <QuestionManagement onClose={() => setShowQuestionForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolsSection;
