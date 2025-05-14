import React from 'react';
import './AssignmentStatusSection.css';

const AssignmentStatusCard = ({ assignment }) => (
  <div className="assignment-status-card">
    <div className="assignment-header">
      <h3>{assignment.title}</h3>
      <span className={`status ${assignment.status}`}>{assignment.statusText}</span>
    </div>
    <p className="course-name">{assignment.course}</p>
    <div className="assignment-stats">
      <div className="stat">
        <span className="material-symbols-outlined">schedule</span>
        <span>Hạn nộp: {assignment.deadline}</span>
      </div>
      <div className="stat">
        <span className="material-symbols-outlined">groups</span>
        <span>Đã nộp: {assignment.submitted}/{assignment.total}</span>
      </div>
    </div>
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}
      ></div>
    </div>
  </div>
);

const AssignmentStatusSection = () => {
  const assignments = [
    {
      title: 'Bài tập số 1: HTML/CSS',
      course: 'Lập trình Web (CSE485)',
      deadline: '15/05/2025',
      submitted: 38,
      total: 45,
      status: 'active',
      statusText: 'Đang diễn ra'
    },
    {
      title: 'Thiết kế CSDL',
      course: 'Cơ sở dữ liệu (CSE486)',
      deadline: '18/05/2025',
      submitted: 30,
      total: 38,
      status: 'active',
      statusText: 'Đang diễn ra'
    }
  ];

  return (
    <div className="assignment-status-section">
      <div className="section-header">
        <h2>Trạng thái bài tập</h2>
        <button className="view-all-button">
          Xem tất cả
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="assignments-grid">
        {assignments.map((assignment, index) => (
          <AssignmentStatusCard key={index} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default AssignmentStatusSection;
