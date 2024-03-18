import React, { useState, useEffect } from 'react';

function Date_picker({ minDate, onDateChange }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const handleDateClick = (date) => {
        setSelectedDate(date);
        onDateChange(date); // Call the callback function to send the selected date to the parent component
    };

    const handleMonthChange = (increment) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() + increment);
        setCurrentMonth(newMonth);
    };

    // Function to generate an array of days in the selected month
    const getDaysInMonth = (year, month) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    // Generate array of days in the current month
    const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());

    // Calculate minimum selectable date (current date)
    const minSelectableDate = minDate || new Date();
    minSelectableDate.setHours(0, 0, 0, 0); // Set to start of day

    // Update the selected date in the parent component when it changes
    useEffect(() => {
        onDateChange(selectedDate);
    }, [selectedDate, onDateChange]);

    return (
        <div className="date-picker">
            <div className="month-selector">
                <button className='month_change' onClick={() => handleMonthChange(-1)}>&#10094;</button>
                <div>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                <button className='month_change' onClick={() => handleMonthChange(1)}>&#10095;</button>
            </div>
            <div className="calendar">
                {daysInMonth.map((day, index) => (
                    <div
                        key={index}
                        className={`day ${selectedDate && day.toDateString() === selectedDate.toDateString() ? 'selected' : ''} ${day < minSelectableDate ? 'disabled' : ''}`}
                        onClick={() => day >= minSelectableDate && handleDateClick(day)}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
            {selectedDate && <p>Selected date: {selectedDate.toLocaleDateString('en-GB')}</p>}
        </div>
    );
}

export default Date_picker;
