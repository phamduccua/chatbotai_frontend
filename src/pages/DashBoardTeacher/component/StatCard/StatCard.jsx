import React from 'react';
import './StatCard.css';

function StatCard({ title, value }) {
  return (
    <div className="stat-card card"> {/* Sử dụng class 'card' chung */}
      <div className="stat-card-title">{title}</div>
      <div className="stat-card-value">{value}</div>
      {/* Có thể thêm icon tại đây */}
    </div>
  );
}

export default StatCard;