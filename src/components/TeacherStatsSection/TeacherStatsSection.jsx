import React from 'react';
import StatCard from '../StatCard/StatCard';
import './TeacherStatsSection.css';

const TeacherStatsSection = () => {
  const stats = [
    {
      title: 'Tổng số lớp',
      value: '12',
      trend: 'up',
      change: '2',
      icon: 'school'
    },
    {
      title: 'Tổng số sinh viên',
      value: '324',
      trend: 'up',
      change: '15',
      icon: 'groups'
    },
    {
      title: 'Bài tập đã giao',
      value: '47',
      trend: 'up',
      change: '5',
      icon: 'assignment'
    },
    {
      title: 'Tỷ lệ nộp bài',
      value: '87%',
      trend: 'down',
      change: '3',
      icon: 'analytics'
    }
  ];

  return (
    <div className="teacher-stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TeacherStatsSection;
