import React from 'react';
import CourseItem from '../CourseItem/CourseItem';
import './CoursesSection.css';

function CoursesSection() {
  // Dữ liệu mock
  const coursesData = [
    { id: 1, name: 'Toán cao cấp', progress: 80 },
    { id: 2, name: 'Lập trình web', progress: 65 },
    { id: 3, name: 'Cơ sở dữ liệu', progress: 45 },
    { id: 4, name: 'Tiếng Anh', progress: 90 },
  ];

  return (
    <div className="courses-section card"> {/* Sử dụng class 'card' chung */}
      <div className="section-header">
        <h2>Khóa học của bạn</h2>
        <a href="#xem-tat-ca">Xem tất cả →</a> {/* Thêm link thật */}
      </div>
      <div className="courses-list">
        {coursesData.map(course => (
          <CourseItem key={course.id} name={course.name} progress={course.progress} />
        ))}
      </div>
    </div>
  );
}

export default CoursesSection;