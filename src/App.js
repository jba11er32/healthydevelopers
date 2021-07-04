import './App.css';
import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setIsLoggedIn(true)
		} else {
			setIsLoggedIn(false)
		}
	}, [])

	if (isLoggedIn === false) {
		return (
			<div>
				<Main />
			</div>
		)
	} else {
		return (
			<div>
				<Profile />
			</div>
		)
	}

}

export default App;
