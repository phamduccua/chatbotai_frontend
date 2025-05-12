import React from 'react';
import './TeacherDashboardLayout.css';

function TeacherDashboardLayout({ children }) {
  return (
    <div className="teacher-dashboard-layout">
      {children}
    </div>
  );
}

export default TeacherDashboardLayout;