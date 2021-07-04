import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Route, Switch } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <LoginForm />
                </Route>
                <Route path="/signup">
                    <SignupForm />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;