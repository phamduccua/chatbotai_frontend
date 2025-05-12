import React from 'react';
import './Header.css'; // Import file CSS

function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1>LMS Platform</h1>
      </div>
      <div className="header-right">
        <span className="user-icon">👤</span> {/* Thay bằng icon thật */}
        <span className="username">Nguyễn</span>
      </div>
    </header>
  );
}

export default Header;