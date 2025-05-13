import React from 'react';
import Header from '../../components/Header'
import TeacherDashboardLayout from './component/TeacherDashboardLayout/TeacherDashboardLayout'
import TeacherStatsSection from './component/TeacherStatsSection/TeacherStatsSection'
import ManagedCoursesSection from './component/ManagedCoursesSection/ManagedCoursesSection'
import AssignmentStatusSection from './component/AssignmentStatusSection/AssignmentStatusSection'
import ResultDistributionSection from './component/ResultDistributionSection/ResultDistributionSection'
import ToolsSection from './component/ToolsSection/ToolsSection'
import './index.css';

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