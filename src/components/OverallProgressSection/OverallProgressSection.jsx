import React from 'react';
import ProgressCircle from '../ProgressCircle/ProgressCircle';
import './OverallProgressSection.css';

function OverallProgressSection() {
  const totalProgress = 65; // Dữ liệu mock

  return (
    <div className="overall-progress-section card"> {/* Sử dụng class 'card' chung */}
      <h2>Tiến độ tổng quan</h2>
      <ProgressCircle percentage={totalProgress} />
      <div className="completion-text">{totalProgress}% hoàn thành</div>
    </div>
  );
}

export default OverallProgressSection;