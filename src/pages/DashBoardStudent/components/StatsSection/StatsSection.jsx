import React from 'react';
import StatCard from '../StatCard/StatCard';
import './StatsSection.css';

function StatsSection() {
  // Dữ liệu mock
  const statsData = [
    { id: 1, title: 'Môn học', value: '4 môn' },
    { id: 2, title: 'Điểm trung bình', value: '8.5' },
    { id: 3, title: 'Deadline gần nhất', value: '2 ngày' },
  ];

  return (
    <div className="stats-section">
      {statsData.map(stat => (
        <StatCard key={stat.id} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}

export default StatsSection;