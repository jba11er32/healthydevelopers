import React from 'react';

const HabitCard = ({ details }) => {
    const date = new Date(details.created_at);
    console.log(date.toLocaleString('default', {month: 'long'}))
    return (
        <div>
            <h2>{date.toLocaleString('default', {month: 'long'})}</h2>
            <ul>
                <li>Water<hr />{details.water}</li>
                <li>Push Ups<hr />{details.pushups}</li>
                <li>Sit Ups<hr />{details.situps}</li>
                <li>Squats<hr />{details.squats}</li>
            </ul>
        </div>
    );
};

export default HabitCard;