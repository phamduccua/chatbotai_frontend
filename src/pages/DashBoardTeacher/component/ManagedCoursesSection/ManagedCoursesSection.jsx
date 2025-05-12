import React from 'react';
import ManagedCourseItem from '../ManagedCourseItem/ManagedCourseItem';
import './ManagedCoursesSection.css';

function ManagedCoursesSection() {
  const coursesData = [
    { id: 1, name: 'Lập trình web nâng cao', students: 65, schedule: 'Thứ 2, 4, 6' },
    { id: 2, name: 'Phát triển ứng dụng di động', students: 42, schedule: 'Thứ 3, 5' },
    { id: 3, name: 'Học máy', students: 38, schedule: 'Thứ 4, 6' },
  ]; // Dữ liệu mock

  return (
    <div className="managed-courses-section card"> {/* Sử dụng class card chung */}
      <div className="section-header">
        <h2>Môn học phụ trách</h2>
        <button className="add-course-button">+ Thêm môn</button> {/* Thêm button */}
      </div>
      <div className="courses-list">
        {coursesData.map(course => (
          <ManagedCourseItem
            key={course.id}
            name={course.name}
            students={course.students}
            schedule={course.schedule}
          />
        ))}
      </div>
    </div>
  );
}

export default ManagedCoursesSection;