import React from 'react';
import Dashboard from './Dashboard';
import HabitDisplay from './HabitDisplay';

const Today = () => {
    return (
        <div>
            <Dashboard />
            <h1>Today's Numbers: </h1>
            <HabitDisplay />
        </div>
    );
};

export default Today;