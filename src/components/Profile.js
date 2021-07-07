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
                <Dashboard />
            </div>
            <div>
                <Switch>
                    <Route exact path='/myhome'>
                        <Home />
                    </Route >
                    <Route exact path='/today'>
                        <Today />
                    </Route>
                    <Route exact path='/month'>
                        <Month />
                    </Route>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                </Switch>
                <HabitDisplay />
            </div>
        </div>
    );
};

export default Profile;