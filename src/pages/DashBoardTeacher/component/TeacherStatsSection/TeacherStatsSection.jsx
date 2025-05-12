import React from 'react';
import StatCard from '../StatCard/StatCard'; // Tái sử dụng StatCard
import './TeacherStatsSection.css';

function TeacherStatsSection() {
  const statsData = [
    { id: 1, title: 'Môn phụ trách', value: '3 môn' },
    { id: 2, title: 'Tổng sinh viên', value: '125' },
    { id: 3, title: 'Bài tập cần chấm', value: '15' },
  ];

  return (
    <div className="teacher-stats-section"> {/* Không cần class card ở đây nếu dùng grid area */}
      {statsData.map(stat => (
        <StatCard key={stat.id} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}

export default TeacherStatsSection;