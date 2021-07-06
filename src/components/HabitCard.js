import { DetailsTwoTone } from '@material-ui/icons';
import React, { useState } from 'react';

const HabitCard = ({ details }) => {
    const dateFormat = new Date(details.created_at);
    return (
        <div>
            <h2>{dateFormat.toLocaleString()}</h2>
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