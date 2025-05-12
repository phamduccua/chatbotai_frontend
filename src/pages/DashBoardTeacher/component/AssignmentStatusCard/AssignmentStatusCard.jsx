import React from 'react';
import './AssignmentStatusCard.css';

function AssignmentStatusCard({ title, submitted, total }) {
  const percentage = total === 0 ? 0 : Math.round((submitted / total) * 100);

  return (
    <div className="assignment-status-card card"> {/* Sử dụng class card chung */}
      <div className="status-title">{title}</div>
      <div className="status-numbers">{submitted}/{total} đã nộp</div>
      <div className="status-progress-container">
        <div
          className="status-progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default AssignmentStatusCard;