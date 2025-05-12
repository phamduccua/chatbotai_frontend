import React from 'react';
import AssignmentStatusCard from '../AssignmentStatusCard/AssignmentStatusCard';
import './AssignmentStatusSection.css';

function AssignmentStatusSection() {
  const assignmentData = [
    { id: 1, title: 'Bài tập tuần 8 - Lập trình web', submitted: 58, total: 65 },
    { id: 2, title: 'Bài tập tuần 5 - Học máy', submitted: 35, total: 38 },
    // Thêm các bài tập khác
  ]; // Dữ liệu mock

  return (
    <div className="assignment-status-section card"> {/* Sử dụng class card chung */}
      <h2>Tình trạng bài tập</h2>
      <div className="assignment-cards">
        {assignmentData.map(assignment => (
          <AssignmentStatusCard
            key={assignment.id}
            title={assignment.title}
            submitted={assignment.submitted}
            total={assignment.total}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignmentStatusSection;