import React from 'react';
import styles from './ProblemTable.module.css'; // Import CSS Modules

// Dữ liệu mẫu
const problemsData = [
    { id: 1, icon: '</>', code: 'CHELLO', title: 'Hello World', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sinh kế tiếp', difficulty: 1, isRed: true },
    { id: 2, icon: '</>', code: 'CTDL_001', title: 'THUẬT TOÁN SINH', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sinh kế tiếp', difficulty: 1, isRed: false },
    { id: 3, icon: '</>', code: 'CTDL_002', title: 'Tổng dãy con = K', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sinh kế tiếp', difficulty: 1, isRed: false },
    { id: 4, icon: '</>', code: 'CTDL_005', title: 'XÓA DỮ LIỆU TRÙNG TRONG DSLK ĐƠN', group: 'CÁC CẤU TRÚC DỮ LIỆU CƠ BẢN', subtopic: 'Sắp xếp - Tìm kiếm', difficulty: 1, isRed: true },
    { id: 5, icon: '</>', code: 'CTDL_006', title: 'LỌC DỮ LIỆU TRÙNG TRONG DSLK ĐƠN', group: 'CÁC CẤU TRÚC DỮ LIỆU CƠ BẢN', subtopic: 'Sắp xếp - Tìm kiếm', difficulty: 1, isRed: true },
    { id: 6, icon: '</>', code: 'DSA_P011', title: 'ĐẾM SỐ VẬT CẢN TRÊN MÊ CUNG', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sắp xếp - Tìm kiếm', difficulty: 1, isRed: true },
    { id: 7, icon: '</>', code: 'DSA_P039', title: 'CHỌN Ô -1', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Quy hoạch động', difficulty: 1, isRed: false },
    { id: 8, icon: '</>', code: 'DSA_P296', title: 'DÃY CON TỔNG LỚN NHẤT', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Quy hoạch động', difficulty: 1, isRed: false },
    { id: 9, icon: '</>', code: 'DSA1001', title: 'XÂU NHỊ PHÂN KẾ TIẾP', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sinh kế tiếp', difficulty: 1, isRed: false },
    { id: 10, icon: '</>', code: 'DSA1002', title: 'TẬP CON KẾ TIẾP', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sinh kế tiếp', difficulty: 1, isRed: false },
    { id: 11, icon: '</>', code: 'DSA1003', title: 'HOÁN VỊ KẾ TIẾP', group: 'CÁC MÔ HÌNH THUẬT TOÁN', subtopic: 'Sinh kế tiếp', difficulty: 1, isRed: true },
];

function ProblemTable() {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.problemTable}>
                <thead>
                    <tr>
                        <th>
                            STT
                            <span className={styles.sortIcon}>
                                <i className="fas fa-sort-up"></i>
                                <i className="fas fa-sort-down"></i>
                            </span>
                        </th>
                        <th>
                            Mã
                            <span className={styles.sortIcon}>
                                <i className="fas fa-sort-up"></i>
                                <i className="fas fa-sort-down"></i>
                            </span>
                        </th>
                        <th>
                            Tiêu đề
                            <span className={styles.sortIcon}>
                                {/* Icon sắp xếp đang active nếu cần */}
                            </span>
                        </th>
                        <th>
                            Nhóm
                            <span className={styles.sortIcon}>
                                <i className="fas fa-sort-up"></i>
                                <i className="fas fa-sort-down"></i>
                            </span>
                        </th>
                        <th>
                            Chủ đề con
                            <span className={styles.sortIcon}>
                                 <i className="fas fa-sort-down"></i> {/* Ví dụ đang sắp xếp theo chủ đề con giảm dần */}
                            </span>
                        </th>
                        <th>
                            Độ khó
                            <span className={styles.sortIcon}>
                                <i className="fas fa-sort-up"></i>
                                <i className="fas fa-sort-down"></i>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {problemsData.map((problem, index) => (
                        <tr key={problem.id} className={index % 2 !== 0 ? styles.altRow : ''}>
                            <td>{problem.id}</td>
                            <td>
                                <span className={styles.iconCode}>{problem.icon}</span>
                                <a href="#" className={styles.codeLink}>{problem.code}</a>
                            </td>
                            <td>
                                <a
                                    href="#"
                                    className={`${styles.titleLink} ${problem.isRed ? styles.redText : ''}`}
                                >
                                    {problem.title}
                                </a>
                            </td>
                            <td>{problem.group}</td>
                            <td>{problem.subtopic}</td>
                            <td>{problem.difficulty}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProblemTable;