import React, { Component, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Month = () => {
    const [state, setState] = useState({
            date: new Date(),
    })

    function handleChange (date) {
        setState({ date })

    }

    return (
        <div className="result-calendar">
            {/* imported from react-calendar */}
            <Calendar 
                onChange={handleChange}
                value={state.date}
            />
        </div>
    );
};

export default Month;