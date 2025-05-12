import React from 'react';
import ToolButton from '../ToolButton/ToolButton';
import './ToolsSection.css';

function ToolsSection() {
  // Hàm xử lý khi click vào các nút
  const handleCreateAssignment = () => {
    alert('Tạo bài tập mới clicked!'); // Logic thực tế
  };

  const handleCreateNotification = () => {
    alert('Tạo thông báo clicked!'); // Logic thực tế
  };

   const handleCreateQuiz = () => {
    alert('Tạo bài kiểm tra clicked!'); // Logic thực tế
  };

  const handleViewReports = () => {
    alert('Xem báo cáo chi tiết clicked!'); // Logic thực tế
  };


  return (
    <div className="tools-section card"> {/* Sử dụng class card chung */}
      <h2>Công cụ</h2>
      <div className="tool-buttons-list">
        <ToolButton text="Thêm bài tập mới" icon="➕" onClick={handleCreateAssignment} />
        <ToolButton text="Tạo thông báo" icon="📢" onClick={handleCreateNotification} />
        <ToolButton text="Tạo bài kiểm tra" icon="📝" onClick={handleCreateQuiz} />
        <ToolButton text="Xem báo cáo chi tiết" icon="📊" onClick={handleViewReports} />
      </div>
    </div>
  );
}

export default ToolsSection;