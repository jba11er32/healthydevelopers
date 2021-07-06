import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { Route, Switch } from 'react-router-dom';



const Main = () => {
    return (
        <div className='main'>
            <div className='mainLeft'>
                <h1>DevHealthyHabits</h1>
                <p>Let's start developing healthy everyday habits!<br/>Log in to your account<br/>or create one to start keeping track of your habits.</p>
                {/* <img className='logo' src={logo} alt="Logo" /> */}
            </div>
            <div>
                <Switch>
                    <Route exact path="/">
                        <LoginForm />
                    </Route>
                    <Route exact path="/signup">
                        <SignupForm />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Main;