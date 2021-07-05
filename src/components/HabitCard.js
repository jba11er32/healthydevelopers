import React from 'react';

const HabitCard = () => {
    return (
        <div>
            <h2>{dateFormat.toLocaleString()}</h2>
            <ul>
                <li>Water<hr />0</li>
                <li>Push Ups<hr />0</li>
                <li>Sit Ups<hr />0</li>
                <li>Squats<hr />0</li>
            </ul>
        </div>
    );
};

export default HabitCard;