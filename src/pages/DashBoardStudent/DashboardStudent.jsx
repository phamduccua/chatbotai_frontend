import React from 'react';
import Header from './components/Header/Header';
import DashboardLayout from './components/DashboardLayout/DashboardLayout';
import StatsSection from './components/StatsSection/StatsSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import OverallProgressSection from './components/OverallProgressSection/OverallProgressSection';
import RecentNotificationsSection from './components/RecentNotificationsSection/RecentNotificationsSection';
import Calendar from './components/Calendar/Calendar';

function DashboardStudent() {
  return (
    <div className="App">
      <Header />
      <DashboardLayout>
        {/* Áp dụng các class area cho các section tương ứng với CSS Grid Layout */}
        <div className="dashboard-header-area"> {/* Có thể tạo component riêng nếu tiêu đề phức tạp */}
            <h1>Dashboard Sinh viên</h1>
        </div>
        <div className="stats-area">
            <StatsSection />
        </div>
        <div className="courses-area">
             <CoursesSection />
        </div>
        <div className="progress-area">
             <OverallProgressSection />
        </div>
        <div className="notifications-area">
             <RecentNotificationsSection />
        </div>
        <div className="calendar-area">
             <Calendar />
        </div>

         {/* Các section khác nếu có */}

      </DashboardLayout>
    </div>
  );
}

export default DashboardStudent;