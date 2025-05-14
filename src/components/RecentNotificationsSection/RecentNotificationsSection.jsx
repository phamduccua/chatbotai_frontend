import React from 'react';
import NotificationItem from '../NotificationItem/NotificationItem';
import './RecentNotificationsSection.css';

function RecentNotificationsSection() {
  // Dữ liệu mock
  const notificationsData = [
    { id: 1, type: 'new', message: 'Bài tập Lập trình web mới', time: '2 giờ trước' },
    { id: 2, type: 'reminder', message: 'Nhắc nhở: Bài kiểm tra Toán', time: '1 ngày trước' },
    // Thêm các thông báo khác
  ];

  return (
    <div className="recent-notifications-section card"> {/* Sử dụng class 'card' chung */}
      <div className="section-header">
        <h2>Thông báo gần đây</h2>
        <a href="#tat-ca">Tất cả →</a> {/* Thêm link thật */}
      </div>
      <div className="notifications-list">
        {notificationsData.map(notification => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            message={notification.message}
            time={notification.time}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentNotificationsSection;