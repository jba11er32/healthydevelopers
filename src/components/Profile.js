import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dashboard from './Dashboard';
import HabitDisplay from './HabitDisplay';

const Profile = () => {
    const [state, setState] = useState({
            date: new Date(),
    })

    function handleChange (date) {
        setState({ date });
    }

    return (
        <div>
            <div>
                <Dashboard />
                <h2>Welcome {localStorage.name}!</h2>
            </div>
            <div>
                <Route exact path='/myprofile'>
                    <Calendar 
                        onChange={handleChange}
                        value={state.date}
                    />
                </Route >
                <HabitDisplay />
            </div>
        </div>
    );
};

export default Profile;