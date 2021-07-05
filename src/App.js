import './App.css';
import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';
import Month from './components/Month';
import HabitForm from './components/HabitForm';

function App() {

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setIsLoggedIn(true)
		} else {
			setIsLoggedIn(false)
		}
	}, [])


	// If the user is logged in, we display the users Profile which shows the dashboard containing Home, Today, Month, and About

	// if (isLoggedIn === false) {
	// 	return (
	// 		<div>
	// 			<Main />
	// 		</div>
	// 	)
	// } else {
	// 	return (
	// 		<div>
	// 			<Profile />
	// 		</div>
	// 	)
	// }

	return (
		<div>
			<Month />
		</div>
	)

}

export default App;
