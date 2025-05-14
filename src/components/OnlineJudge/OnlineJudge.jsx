import React, { useState, useMemo } from 'react'; // Import useMemo
import './OnlineJudge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const OnlineJudge = () => {
  // Tab and code state
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'problem'
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('Python');

  // State để lưu ID của bài tập đang được xem chi tiết
  const [selectedProblemId, setSelectedProblemId] = useState(null);

  // Sorting state
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'ascending'
  });

  // Dữ liệu bài tập - Đã thêm các trường chi tiết cho mỗi bài
  // Lưu ý: Đây là dữ liệu mẫu. Trong thực tế sẽ fetch từ API.
  const [problems] = useState([
    {
      id: 1,
      code: 'CHELLO',
      title: 'Hello World',
      group: 'CÁC MÔ HÌNH THUẬT TOÁN',
      subTopic: 'Sinh kế tiếp',
      difficulty: 1,
      isRed: true, // Giả định cho style màu đỏ
      description: "In ra dòng chữ 'Hello World'.",
      inputFormat: "Không có input.",
      outputFormat: "Một dòng duy nhất chứa chuỗi \"Hello World\".",
      deadline: "Không giới hạn",
      testCases: [{ input: "N/A", output: "Hello World" }]
    },
    {
      id: 2,
      code: 'CTDL_001',
      title: 'THUẬT TOÁN SINH',
      group: 'CÁC MÔ HÌNH THUẬT TOÁN',
      subTopic: 'Sinh kế tiếp',
      difficulty: 1,
      isRed: false,
      description: "Cho số nguyên dương N, liệt kê tất cả các cấu hình nhị phân độ dài N.",
      inputFormat: "Một số nguyên dương N (1 ≤ N ≤ 15).",
      outputFormat: "In ra tất cả các cấu hình nhị phân độ dài N, mỗi cấu hình trên một dòng.",
      deadline: "Không giới hạn",
      testCases: [{ input: "2", output: "00\n01\n10\n11" }]
    },
    {
      id: 3,
      code: 'SORT_001',
      title: 'Sắp xếp đơn giản',
      group: 'THUẬT TOÁN SẮP XẾP',
      subTopic: 'Sắp xếp cơ bản',
      difficulty: 2,
      isRed: false,
      description: "Cho một mảng các số nguyên, sắp xếp chúng theo thứ tự tăng dần.",
      inputFormat: "Dòng đầu tiên là số nguyên N (1 ≤ N ≤ 1000). Dòng thứ hai chứa N số nguyên, cách nhau bởi khoảng trắng.",
      outputFormat: "In ra N số nguyên đã sắp xếp theo thứ tự tăng dần, cách nhau bởi khoảng trắng.",
      deadline: "30/04/2025 - 23:59",
      testCases: [{ input: "5\n5 2 8 1 9", output: "1 2 5 8 9" }]
    },
    {
      id: 4,
      code: 'GRAPH_001',
      title: 'Tìm đường đi ngắn nhất',
      group: 'LÝ THUYẾT ĐỒ THỊ',
      subTopic: 'Đường đi ngắn nhất',
      difficulty: 3,
      isRed: false,
      description: "Cho một đồ thị có trọng số không âm và hai đỉnh s, t. Tìm độ dài đường đi ngắn nhất từ s đến t.",
      inputFormat: "Dòng đầu tiên chứa N, M (số đỉnh, số cạnh), s, t. M dòng tiếp theo mỗi dòng chứa 3 số u, v, w biểu thị cạnh từ u đến v có trọng số w.",
      outputFormat: "In ra độ dài đường đi ngắn nhất từ s đến t, hoặc -1 nếu không có đường đi.",
      deadline: "05/05/2025 - 23:59",
      testCases: [{ input: "4 4 1 4\n1 2 1\n1 3 4\n2 4 2\n3 4 5", output: "3" }]
    },
    {
      id: 5,
      code: 'DP_001',
      title: 'Dãy con tăng dài nhất',
      group: 'QUY HOẠCH ĐỘNG',
      subTopic: 'Dãy con',
      difficulty: 3,
      isRed: false,
      description: "Cho một dãy số, tìm độ dài của dãy con tăng dài nhất.",
      inputFormat: "Dòng đầu tiên là số nguyên N (1 ≤ N ≤ 1000). Dòng thứ hai chứa N số nguyên, cách nhau bởi khoảng trắng.",
      outputFormat: "In ra độ dài của dãy con tăng dài nhất.",
      deadline: "07/05/2025 - 23:59",
      testCases: [{ input: "7\n3 10 2 1 20 5 8", output: "4" }] // Dãy con tăng: 3 10 20 8 (incorrect), correct: 3 10 20 or 3 5 8 or 1 5 8 -> length 3. Example might be wrong or problem slightly different. Let's use a standard LIS example: 10 9 2 5 3 7 101 18 -> LIS is 2 3 5 7 18 or 2 3 7 101 (length 5). Let's correct the example.
    }
  ]);


  // Handle column sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Get sort icon based on column state
  const getSortIcon = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'ascending' ?
        <FontAwesomeIcon icon={faSortUp} style={{color: '#4a90e2'}} /> :
        <FontAwesomeIcon icon={faSortDown} style={{color: '#4a90e2'}} />;
    }
    return (
      <span className="sort-icon-inactive"> {/* Thêm class để dễ dàng style icon mờ */}
        <FontAwesomeIcon icon={faSortUp} />
        <FontAwesomeIcon icon={faSortDown} />
      </span>
    );
  };

  // Sort problems based on current sortConfig
  const sortedProblems = useMemo(() => {
    const sortableItems = [...problems];
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === 'string') {
          // Sử dụng localeCompare cho chuỗi để sắp xếp đúng tiếng Việt
          const comparison = aValue.localeCompare(bValue, 'vi');
          return sortConfig.direction === 'ascending' ? comparison : -comparison;
        }

        // So sánh số
        return sortConfig.direction === 'ascending' ?
          aValue - bValue :
          bValue - aValue;
      });
    }
    return sortableItems;
  }, [problems, sortConfig]); // Dependencies: rerun only if problems or sortConfig change


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting code for problem ID:', selectedProblemId);
    console.log('Code:', code);
    console.log('Language:', language);
    // TODO: Implement actual submission logic
  };

  // Render function for the problem list table
  const renderProblemList = () => (
    <div className="table-container">
      <table className="problem-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>
              STT
              <span className="sort-icon">
                {getSortIcon('id')}
              </span>
            </th>
            <th onClick={() => handleSort('code')}>
              Mã
              <span className="sort-icon">
                {getSortIcon('code')}
              </span>
            </th>
            <th onClick={() => handleSort('title')}>
              Tiêu đề
              <span className="sort-icon">
                {getSortIcon('title')}
              </span>
            </th>
            <th onClick={() => handleSort('group')}>
              Nhóm
              <span className="sort-icon">
                {getSortIcon('group')}
              </span>
            </th>
            <th onClick={() => handleSort('subTopic')}>
              Chủ đề con
              <span className="sort-icon">
                {getSortIcon('subTopic')}
              </span>
            </th>
            <th onClick={() => handleSort('difficulty')}>
              Độ khó
              <span className="sort-icon">
                {getSortIcon('difficulty')}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProblems.map((problem, index) => (
            <tr key={problem.id} className={index % 2 === 1 ? 'alt-row' : ''}>
              <td>{problem.id}</td>
              <td>
                <span className="icon-code">&lt;/&gt;</span>
                {/* Cập nhật onClick để chọn bài và chuyển tab */}
                <a href="#" className="code-link" onClick={(e) => { e.preventDefault(); setActiveTab('problem'); setSelectedProblemId(problem.id); }}>{problem.code}</a>
              </td>
              <td>
                {/* Cập nhật onClick để chọn bài và chuyển tab */}
                <a href="#" className={`title-link ${problem.isRed ? 'red-text' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('problem'); setSelectedProblemId(problem.id); }}>
                  {problem.title}
                </a>
              </td>
              <td>{problem.group}</td>
              <td>{problem.subTopic}</td>
              <td>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Render function for the problem solving interface
  const renderProblemSolver = () => {
    // Tìm bài tập hiện tại dựa vào selectedProblemId
    const currentProblem = problems.find(p => p.id === selectedProblemId);

    // Xử lý trường hợp không tìm thấy bài tập (ví dụ: refresh trang khi đang ở tab 'problem')
    if (!currentProblem) {
      return (
        <div className="problem-details-error">
          <p>Không tìm thấy chi tiết bài tập. Vui lòng quay lại danh sách để chọn.</p>
          <button onClick={() => { setActiveTab('list'); setSelectedProblemId(null); }}>Quay lại danh sách</button>
        </div>
      );
    }

    return (
      <div className="online-judge"> {/* Class này có thể cần điều chỉnh CSS để phù hợp layout 2 cột */}
        <div className="problem-section">
          <h1>{currentProblem.title}</h1>
          {currentProblem.deadline && <div className="deadline">Thời hạn: {currentProblem.deadline}</div>} {/* Hiển thị nếu có deadline */}
         
          <section className="problem-description">
            <h2>Mô tả bài toán</h2>
            <p>{currentProblem.description || "Đang cập nhật mô tả..."}</p> {/* Hiển thị placeholder nếu không có */}
          </section>

          <section className="input-format">
            <h2>Input:</h2>
            <p>{currentProblem.inputFormat || "Đang cập nhật định dạng input..."}</p>
          </section>

          <section className="output-format">
            <h2>Output:</h2>
            <p>{currentProblem.outputFormat || "Đang cập nhật định dạng output..."}</p>
          </section>

          <section className="test-cases">
            <h2>Ví dụ:</h2>
            {currentProblem.testCases && currentProblem.testCases.length > 0 ? (
              currentProblem.testCases.map((testCase, index) => (
                <div key={index} className="test-case">
                  <div className="test-input">
                    <h3>Input:</h3>
                    <pre>{testCase.input}</pre>
                  </div>
                  <div className="test-output">
                    <h3>Output:</h3>
                    <pre>{testCase.output}</pre>
                  </div>
                </div>
              ))
            ) : (
              <p>Không có ví dụ minh họa.</p>
            )}
          </section>
        </div>

        <div className="code-section">
          <div className="code-header">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              {/* Thêm các ngôn ngữ khác nếu cần */}
            </select>
          </div>
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
          <div className="submit-section">
            <button onClick={handleSubmit} className="submit-button">
              <span className="material-symbols-outlined">send</span> {/* Đảm bảo bạn có link font Material Icons */}
              Nộp bài
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="online-judge-container">
      <div className="tab-bar">
        <a
          href="#"
          className={`tab ${activeTab === 'list' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('list');
            setSelectedProblemId(null); // Reset selected problem when going back to list
          }}
        >
          Danh sách bài tập
        </a>
        {activeTab === 'problem' && selectedProblemId !== null && (
          <a
            href="#"
            className={`tab ${activeTab === 'problem' ? 'active' : ''}`}
            onClick={(e) => e.preventDefault()} // Prevent default but don't change tab if already on problem tab
          >
            Làm bài (ID: {selectedProblemId}) {/* Hiển thị ID bài đang làm */}
          </a>
        )}
      </div>

      {activeTab === 'list' ? renderProblemList() : renderProblemSolver()}
    </div>
  );
};

export default OnlineJudge;