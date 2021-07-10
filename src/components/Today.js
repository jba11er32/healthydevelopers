import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import HabitDisplay from './HabitDisplay';
import HabitForm from './HabitForm';

const Today = () => {
    return (
        <div>
            <Dashboard />
            <h1>Today's Numbers: </h1>
            <Switch>
                <Route exact path='/today' component={HabitDisplay} />
                <Route exact path='/create' component={HabitForm}/>
            </Switch>
        </div>
    );
};

export default Today;