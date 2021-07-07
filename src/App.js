import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Today from './components/Today';
import Month from './components/Month';
import About from './components/About';



function App() {
	// grabs user from rootReducer
	const user = useSelector(state => state.user)
	const [dailyNumbers, setDailyNumbers] = useState()

	const url = 'https://healthydevelopers-jl.herokuapp.com/users/login'

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Object.keys(user).length ? Profile : Main} />
                <Route exact path='/myprofile'>
                    <Profile />
                </Route>
                <Route exact path='/today'>
                    <Today dailyNumbers={dailyNumbers} setDailyNumbers={setDailyNumbers}/>
                </Route>
                <Route exact path='/month'>
                    <Month dailyNumbers={dailyNumbers} setDailyNumbers={setDailyNumbers}/>
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
			</Switch>
		</Router>
	)

}

export default App;
