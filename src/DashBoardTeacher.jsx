import React from 'react';
import Header from './components/Header/Header';
import TeacherDashboardLayout from './components/TeacherDashboardLayout/TeacherDashboardLayout';
import TeacherStatsSection from './components/TeacherStatsSection/TeacherStatsSection';
import ManagedCoursesSection from './components/ManagedCoursesSection/ManagedCoursesSection';
import AssignmentStatusSection from './components/AssignmentStatusSection/AssignmentStatusSection';
import ResultDistributionSection from './components/ResultDistributionSection/ResultDistributionSection';
import ToolsSection from './components/ToolsSection/ToolsSection';
import ChatBot from './components/ChatBot/ChatBot';
//import QuestionManagement from './components/QuestionManagement/QuestionManagement';

function DashBoardTeacher() {
  return (
    <div className="DashBoardTeacher">
      <Header />
      <TeacherDashboardLayout>
        <div className="dashboard-header-area">
          <h1>Dashboard Giảng viên</h1>
        </div>
        <div className="stats-area">
          <TeacherStatsSection />
        </div>
        <div className="courses-area">
          <ManagedCoursesSection />
        </div>
        {/* <div className="questions-area">
          <QuestionManagement />
        </div> */}
        <div className="assignments-area">
          <AssignmentStatusSection />
        </div>
        <div className="sidebar-area">
          <ResultDistributionSection />
          <ToolsSection />
        </div>
      </TeacherDashboardLayout>
      <ChatBot />
    </div>
  );
}

export default DashBoardTeacher;
