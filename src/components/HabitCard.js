import React from 'react';
import Dashboard from './Dashboard';

const HabitCard = ({ habit }) => {
    const date = new Date(habit.created_at);
    console.log(date.toLocaleString('default', {month: 'long'}))

    return (
        <div>
            <Dashboard />
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