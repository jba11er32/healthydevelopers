import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Main from './components/Main';
import { API_URL } from './config';
import { BrowserRouter as Router } from 'react-router-dom';
import Today from './components/Today';
import Month from './components/Month';
import About from './components/About';
import HabitDisplay from './components/HabitDisplay';



function App() {
	const dispatch = useDispatch();
	// grabs user from rootReducer
	const user = useSelector(state => state.user)

	// const url = `${API_URL}/`;
	const url = 'https://healthydevelopers-jl.herokuapp.com/users/login'

	// useEffect(() => {
	// 	fetch(url, {
	// 		headers: { 
	// 			'Authorization': `Bearer ${localStorage.getItem('token')}`, 
	// 			'Content-Type': 'application/json',
	// 		}
	// 	})
	// 		.then((res) => res.json())
	// 		.then((user) => {
	// 			dispatch({
	// 				type: 'SET_USER',
	// 				payload: user
	// 			})

	// 			dispatch({
	// 				type: 'SET_HABITS',
	// 				payload: user.owner
	// 			})
	// 		})

	// })

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Object.keys(user).length ? Profile : Main} />
                <Route exact path='/myprofile'>
                    <Profile />
                </Route>
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
		</Router>
	)

}

export default App;
