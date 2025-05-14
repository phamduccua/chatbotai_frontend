import React from 'react';
import './ManagedCoursesSection.css';

const ManagedCourseItem = ({ course }) => (
  <div className="managed-course-item">
    <div className="course-icon">
      <span className="material-symbols-outlined">{course.icon}</span>
    </div>
    <div className="course-info">
      <h3>{course.name}</h3>
      <p>{course.code}</p>
      <div className="course-stats">
        <span>
          <span className="material-symbols-outlined">groups</span>
          {course.students} sinh viên
        </span>
        <span>
          <span className="material-symbols-outlined">assignment</span>
          {course.assignments} bài tập
        </span>
      </div>
    </div>
  </div>
);

const ManagedCoursesSection = () => {
  const courses = [
    {
      name: 'Lập trình Web',
      code: 'CSE485',
      students: 45,
      assignments: 8,
      icon: 'web'
    },
    {
      name: 'Cơ sở dữ liệu',
      code: 'CSE486',
      students: 38,
      assignments: 6,
      icon: 'database'
    },
    {
      name: 'An toàn thông tin',
      code: 'CSE488',
      students: 42,
      assignments: 5,
      icon: 'security'
    }
  ];

  return (
    <div className="managed-courses-section">
      <div className="section-header">
        <h2>Các khóa học đang quản lý</h2>
        <button className="view-all-button">
          Xem tất cả
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <ManagedCourseItem key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ManagedCoursesSection;
