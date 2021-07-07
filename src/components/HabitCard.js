import React from 'react';

const HabitCard = ({ habit }) => {
    const date = new Date(habit.createdAt);

    return (
        <div>
            <h2>{date.toLocaleString('default', {month: 'long'})}</h2>
            <ul>
                <li>Water<hr />{habit.water}</li>
                <li>Push Ups<hr />{habit.pushups}</li>
                <li>Sit Ups<hr />{habit.situps}</li>
                <li>Squats<hr />{habit.squats}</li>
            </ul>
        </div>
    );
};

export default HabitCard;