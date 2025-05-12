import React from 'react';
import './ManagedCourseItem.css';

function ManagedCourseItem({ name, students, schedule }) {
  return (
    <div className="managed-course-item">
      <div className="course-info">
        <div className="course-name">{name}</div>
        <div className="course-details">{students} sinh viên • {schedule}</div>
      </div>
      <div className="course-action">
        → {/* Có thể thay bằng icon mũi tên */}
      </div>
    </div>
  );
}

export default ManagedCourseItem;