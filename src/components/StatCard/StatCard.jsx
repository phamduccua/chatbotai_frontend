import React from 'react';
import './StatCard.css';

function StatCard({ title, value, trend, change, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <div className="stat-value">
          <span className="value">{value}</span>
          {trend && change && (
            <div className={`trend ${trend}`}>
              <span className="material-symbols-outlined">
                {trend === 'up' ? 'trending_up' : 'trending_down'}
              </span>
              <span>{change}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatCard;