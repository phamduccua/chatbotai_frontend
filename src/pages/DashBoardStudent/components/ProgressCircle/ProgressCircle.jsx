import React from 'react';
import './ProgressCircle.css';

function ProgressCircle({ percentage }) {
  // Đơn giản hóa bằng CSS conic-gradient (không tương thích hoàn toàn trên mọi trình duyệt cũ)
  // Hoặc sử dụng SVG hoặc thư viện biểu đồ
  const circumference = 2 * Math.PI * 40; // Giả định bán kính 40

  // Sử dụng SVG cho độ tương thích cao hơn
  return (
    <div className="progress-circle-container">
      <svg className="progress-circle" width="120" height="120" viewBox="0 0 120 120">
        <circle
          className="progress-circle-bg"
          cx="60"
          cy="60"
          r="50"
          strokeWidth="10"
        ></circle>
        <circle
          className="progress-circle-progress"
          cx="60"
          cy="60"
          r="50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percentage / 100) * circumference}
          strokeLinecap="round"
          transform="rotate(-90 60 60)" // Bắt đầu từ đỉnh
        ></circle>
      </svg>
       <div className="progress-circle-text">{percentage}%</div>
    </div>
  );
}

export default ProgressCircle;