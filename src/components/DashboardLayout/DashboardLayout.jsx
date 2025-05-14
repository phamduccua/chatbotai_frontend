import React from 'react';
import './DashboardLayout.css';
import ChatBot from '../ChatBot/ChatBot';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      {children}
      <ChatBot />
    </div>
  );
}

export default DashboardLayout;