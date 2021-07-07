import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Today from './Today';
import Month from './Month';
import About from './About';
import HabitDisplay from './HabitDisplay';


const Profile = () => {
    return (
        <div>
            <div>
                <h1>DevHealthyHabits</h1>
            </div>
            <div>
                <Dashboard />
                <Route exact path='/myhome'>
                    <Home />
                </Route >
                <Route path='/today'>
                    <Today />
                </Route>
                <Route path='/month'>
                    <Month />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <HabitDisplay />
            </div>
        </div>
    );
};

export default Profile;