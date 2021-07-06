import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Main from './components/Main';
import { API_URL } from './config';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
	const dispatch = useDispatch();

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
					payload: user.habits
				})
			})
		}
	})
	return (
		<Router>
			<Switch>
				<Main />
				<Profile />
			</Switch>
		</Router>
	)

}

export default App;
