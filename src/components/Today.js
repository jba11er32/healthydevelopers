import React from 'react';
import Dashboard from './Dashboard';
import HabitForm from './HabitForm'

const Today = () => {
    return (
        <div>
            <Dashboard />
            <h1>
                Today's Numbers: 0
            </h1>
            <HabitForm />
        </div>
    );
};

export default Today;