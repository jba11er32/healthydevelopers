import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Main from './components/Main';
import { API_URL } from './config';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
	const dispatch = useDispatch();
	// grabs the user in 
	const user = useSelector(state => state.user)

	const url = `${API_URL}/`;

	useEffect(() => {
		if (localStorage.token) {
			const config = {
				headers: {
					Authorization: `Bearer ${localStorage.token}`
				}
			}
			
			fetch(url, config)
			.then(res => res.json())
			.then(user =>  {
				dispatch({
					type: 'SET_USER',
					payload: user
				})
				
				dispatch({
					type: 'SET_HABITS',
					payload: user.owner
				})
			})
		}
	})
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Object.keys(user).length ? Profile : Main} />
				<Route exact path='/myhome' component={Profile} />
				<Link to='/myhome'/>
			</Switch>
		</Router>
	)

}

export default App;
