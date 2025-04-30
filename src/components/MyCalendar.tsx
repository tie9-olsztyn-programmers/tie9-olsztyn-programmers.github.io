import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
    const [date, setDate] = useState(new Date());
    return (
        <div style={{ maxWidth: 500, margin: 'auto' }}>
            <Calendar
                onChange={(value) => {
                    if (value instanceof Date) {
                        setDate(value);
                    }
                }}
                value={date}
                tileContent={({ date, view }) => {
                    // tu możesz dodać kropki, notatki itp. bazując na swojej liście zadań
                    return <span />;
                }}
            />
        </div>
    );
}