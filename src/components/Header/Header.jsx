import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide header on /login and /
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  const studentPrefixes = ['/student', '/practice', '/online-judge'];
  const isStudent = studentPrefixes.some(prefix =>
    location.pathname.startsWith(prefix)
  );

  const [username, setUsername] = React.useState('');

  React.useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername || 'User');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username'); // Clear stored username
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <h1>LMS Platform</h1>
        {isStudent && (
          <nav className="header-nav">
            <Link to="/student-dashboard" className={location.pathname === '/student-dashboard' ? 'active' : ''}>
              Dashboard
            </Link>            
            <Link to="/practice" className={location.pathname === '/practice' ? 'active' : ''}>
              Luyện tập
            </Link>
            <Link to="/online-judge" className={location.pathname.startsWith('/online-judge') ? 'active' : ''}>
              Online Judge
            </Link>
          </nav>
        )}
      </div>
      <div className="header-right">        <div className="user-info">
          <span className="user-icon">👤</span>
          <span className="username">{username}</span>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          <span className="material-symbols-outlined">logout</span>
          Đăng xuất
        </button>
      </div>
    </header>
  );
}

export default Header;