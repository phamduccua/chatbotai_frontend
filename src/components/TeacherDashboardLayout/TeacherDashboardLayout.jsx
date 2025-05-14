import React from 'react';
import './TeacherDashboardLayout.css';

function TeacherDashboardLayout({ children }) {
  return (
    <div className="teacher-dashboard-layout">
      <main className="teacher-dashboard-main">
        {children}
      </main>
    </div>
  );
}

export default TeacherDashboardLayout;
