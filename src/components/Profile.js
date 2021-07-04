import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Today from './Today';
import Month from './Month';
import About from './About';


const Profile = () => {
    return (
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
        </div>
    );
};

export default Profile;