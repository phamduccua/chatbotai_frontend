import React from 'react';
import './CourseItem.css';

function CourseItem({ name, progress }) {
  // Đảm bảo tiến độ nằm trong khoảng 0-100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="course-item">
      <div className="course-name">{name}</div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${clampedProgress}%` }}
        ></div>
      </div>
      <div className="progress-text">{clampedProgress}%</div>
    </div>
  );
}

export default CourseItem;