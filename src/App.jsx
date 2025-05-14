import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardStudent from './DashboardStudent';
import DashBoardTeacher from './DashBoardTeacher';
import LoginPage from './components/LoginPage/LoginPage';
import Header from './components/Header/Header';
import './App.css';
import PracticePage from './components/PracticePage/PracticePage';
import OnlineJudge from './components/OnlineJudge/OnlineJudge';

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/login' && location.pathname !== '/';
  
  return (
    <div className="app-container">
      {showHeader && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-dashboard" element={<DashboardStudent />} />
          <Route path="/teacher-dashboard" element={<DashBoardTeacher />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/online-judge" element={<OnlineJudge />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
