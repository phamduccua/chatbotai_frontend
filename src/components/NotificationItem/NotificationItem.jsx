import React from 'react';
import './NotificationItem.css';

function NotificationItem({ type, message, time }) {
  // Có thể dùng 'type' để đổi màu icon hoặc nền
  const icon = type === 'new' ? '🔹' : '🔔'; // Icon ví dụ

  return (
    <div className="notification-item">
      <div className={`notification-icon notification-type-${type}`}>
         {/* Icon hoặc chấm màu */}
      </div>
      <div className="notification-content">
         <div className="notification-message">{message}</div>
         <div className="notification-time">{time}</div>
      </div>
    </div>
  );
}

export default NotificationItem;