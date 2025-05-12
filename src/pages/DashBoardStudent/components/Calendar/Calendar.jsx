import React from 'react';
import './Calendar.css';

function Calendar() {
  // Đây chỉ là một placeholder.
  // Để có lịch đầy đủ chức năng, bạn nên dùng thư viện như:
  // - react-datepicker
  // - react-calendar
  // - FullCalendar (với connector React)

  const days = [
      { date: 25, day: 'T2', event: false },
      { date: 26, day: 'T3', event: true }, // Ví dụ có sự kiện
      { date: 27, day: 'T4', event: false },
      { date: 28, day: 'T5', event: true },
      { date: 29, day: 'T6', event: false },
      { date: 30, day: 'T7', event: false },
      { date: 1, day: 'CN', event: true, currentMonth: true }, // Ngày của tháng hiện tại
  ]; // Dữ liệu mock

  return (
    <div className="calendar card"> {/* Sử dụng class 'card' chung */}
      <h2>Lịch học tháng 4</h2> {/* Cập nhật tháng động */ }
      <div className="calendar-grid">
          {days.map(day => (
              <div key={day.date} className={`calendar-day ${day.currentMonth ? 'current-month' : ''} ${day.event ? 'has-event' : ''}`}>
                  <div className="day-number">{day.date}</div>
                  <div className="day-name">{day.day}</div>
                   {day.event && <div className="event-dot"></div>} {/* Dấu chấm sự kiện */}
              </div>
          ))}
      </div>
    </div>
  );
}

export default Calendar;