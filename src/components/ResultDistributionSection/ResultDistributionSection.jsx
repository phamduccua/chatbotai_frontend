import React from 'react';
import './ResultDistributionSection.css';

const ResultDistributionSection = () => {
  const results = [
    { grade: 'A', count: 45, color: '#00875a' },
    { grade: 'B', count: 78, color: '#0086c9' },
    { grade: 'C', count: 52, color: '#9747ff' },
    { grade: 'D', count: 12, color: '#ff9533' },
    { grade: 'F', count: 8, color: '#dc2626' },
  ];

  const total = results.reduce((sum, result) => sum + result.count, 0);

  return (
    <div className="result-distribution-section">
      <h2>Phân bố điểm số</h2>
      <div className="chart">
        {results.map((result) => (
          <div key={result.grade} className="grade-bar">
            <div className="bar-label">
              <span>{result.grade}</span>
              <span>{((result.count / total) * 100).toFixed(1)}%</span>
            </div>
            <div className="bar-container">
              <div
                className="bar"
                style={{
                  width: `${(result.count / total) * 100}%`,
                  backgroundColor: result.color,
                }}
              ></div>
            </div>
            <span className="count">{result.count} sinh viên</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultDistributionSection;
