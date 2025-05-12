import React from 'react';
import './ResultChart.css'; // Đảm bảo import CSS

// Import các thành phần cần thiết từ chart.js và react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; // Import component Bar

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function ResultChart({ data }) {
  // Dữ liệu MOCK - Thay thế bằng dữ liệu thực tế của bạn
  const mockData = [
      { label: 'Xuất sắc', count: 10 },
      { label: 'Giỏi', count: 20 },
      { label: 'Khá', count: 30 },
      { label: 'TB', count: 15 },
      { label: 'Yếu', count: 5 },
  ];

  // Chuyển đổi dữ liệu mock sang định dạng của Chart.js
  const chartData = {
      labels: mockData.map(item => item.label), // Lấy các label (Xuất sắc, Giỏi, ...)
      datasets: [
          {
              label: 'Số sinh viên', // Label cho dataset này (có thể ẩn)
              data: mockData.map(item => item.count), // Lấy số lượng sinh viên
              backgroundColor: '#6a5acd', // Màu tím (Sử dụng màu giống nút "Thêm môn" hoặc màu từ ảnh)
              borderRadius: 4, // Bo góc cột (tùy chọn, nếu thư viện hỗ trợ)
               barPercentage: 0.8, // Độ rộng của cột so với khoảng trống
               categoryPercentage: 0.8, // Độ rộng nhóm cột so với khoảng trống
          },
      ],
  };

  // Các tùy chọn của biểu đồ để giống với hình ảnh
  const options = {
      responsive: true, // Biểu đồ responsive
       maintainAspectRatio: false, // Quan trọng: cho phép tùy chỉnh kích thước bằng CSS container
      plugins: {
          legend: {
              display: false, // Ẩn label dataset
          },
           title: {
               display: true, // Hiển thị tiêu đề
               text: 'Phân bố kết quả', // Tiêu đề biểu đồ
                font: {
                   size: 18, // Kích thước font tiêu đề
                   weight: 'bold',
                },
                padding: {
                    bottom: 20 // Khoảng cách dưới tiêu đề
                },
                align: 'start', // Căn lề trái tiêu đề
                color: '#333' // Màu tiêu đề
           },
           tooltip: { // Tùy chọn hiển thị tooltip khi hover
               enabled: true,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) {
                           label += ': ';
                       }
                       if (context.parsed.y !== null) {
                           label += context.parsed.y + ' sinh viên';
                       }
                       return label;
                   }
               }
           }
      },
      scales: {
          x: {
              title: {
                  display: false, // Ẩn tiêu đề trục X
              },
              grid: {
                  display: false, // Ẩn lưới dọc trục X
              },
              ticks: {
                   color: '#555', // Màu label trục X
                   font: {
                       size: 12 // Kích thước font label trục X
                   }
              }
          },
          y: {
              beginAtZero: true, // Bắt đầu trục Y từ 0
              title: {
                  display: false, // Ẩn tiêu đề trục Y
              },
              // Đặt max và stepSize để giống khoảng chia trong ảnh
              max: 40, // Giá trị tối đa trên trục Y
              ticks: {
                  stepSize: 10, // Bước nhảy giữa các giá trị trên trục Y
                   color: '#555', // Màu label trục Y
                   font: {
                       size: 12 // Kích thước font label trục Y
                   }
              },
              grid: {
                  display: true, // Hiển thị lưới ngang trục Y
                  color: '#eee', // Màu lưới ngang
                  drawBorder: false, // Không vẽ đường biên trục Y
                  //drawTicks: false, // Không vẽ các gạch nhỏ trên trục Y
              }
          }
      }
  };


  return (
    <div className="result-chart">
      {/* Sử dụng component Bar và truyền data, options */}
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default ResultChart;