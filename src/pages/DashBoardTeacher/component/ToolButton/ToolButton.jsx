import React from 'react';
import './ToolButton.css';

function ToolButton({ text, icon, onClick }) {
  return (
    <button className="tool-button" onClick={onClick}>
      <span className="tool-icon">{icon}</span> {/* Icon */}
      <span className="tool-text">{text}</span> {/* Text */}
      <span className="tool-arrow">→</span> {/* Mũi tên */}
    </button>
  );
}

export default ToolButton;