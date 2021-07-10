import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import Profile from './components/Profile';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import HabitForm from './components/Today';
import Month from './components/Month';
import About from './components/About';
import UpdateForm from './components/UpdateForm';
import HabitDisplay from './components/HabitDisplay';
import HabitPage from './components/HabitPage';
import Today from './components/Today';



function App() {
	// grabs user from rootReducer
	const user = useSelector(state => state.user)

	if (!localStorage.token) {
		return (
		<Router>
			<Route exact path='/' component={Main} />
			<Route exact path='/signup' component={Main} />
			<Redirect to='/' />
		</Router>
		)}

	return (
		<Router>
			<Switch>
				<Route exact path='/today/:id' component={HabitPage}/>
				<Route exact path='/:id/update' component={UpdateForm} />
				<Route exact path='/' component={Object.keys(user).length ? Profile : Main} />
                <Route exact path='/myprofile' component={Profile} />
                <Route exact path='/create' component={HabitForm}/>
				<Route exact path='/today' component={Today} />
                <Route exact path='/month' component={Month} />
                <Route exact path='/about' component={About} />
			</Switch>
		</Router>
	)

}

export default App;
