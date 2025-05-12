import React from 'react';
import Header from './components/Header/Header';
// Sửa dòng này
import TeacherDashboardLayout from './components/TeacherDashboardLayout/TeacherDashboardLayout';
import TeacherStatsSection from './components/TeacherStatsSection/TeacherStatsSection';
import ManagedCoursesSection from './components/ManagedCoursesSection/ManagedCoursesSection';
import AssignmentStatusSection from './components/AssignmentStatusSection/AssignmentStatusSection';
// Sửa dòng này
import ResultDistributionSection from './components/ResultDistributionSection/ResultDistributionSection';
import ToolsSection from './components/ToolsSection/ToolsSection';

// Import global CSS
import './index.css'; // Đảm bảo đã import global styles

function DashBoardTeacher() {
  return (
    <div className="DashBoardTeacher">
      <Header />
      <TeacherDashboardLayout>
         {/* Áp dụng các class area cho các section tương ứng với CSS Grid Layout */}
        <div className="dashboard-header-area">
             <h1>Dashboard Giảng viên</h1>
        </div>
        <div className="stats-area">
            <TeacherStatsSection />
        </div>
        <div className="courses-area">
             <ManagedCoursesSection />
        </div>
         <div className="assignments-area">
             <AssignmentStatusSection />
         </div>
        <div className="sidebar-area"> {/* Container cho các phần bên phải */}
             <ResultDistributionSection /> {/* Sử dụng component đã import đúng */}
             <ToolsSection />
        </div>

         {/* Các section khác nếu có */}

      </TeacherDashboardLayout>
    </div>
  );
}

export default DashBoardTeacher;