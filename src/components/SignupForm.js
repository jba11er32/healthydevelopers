import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { API_URL } from '../config';

const SignupForm = () => {
	const passwordMinLength = 8

	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	function handleSubmit(event) {
		event.preventDefault();
		
		const newUserData = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}

		const url = `${API_URL}/signup`;
		
		if(state.password !== state.confirmPassword) {
			alert("Passwords do not match");
		} else {		
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newUserData),
			})
				.then((data) => {})
				.then((res) => res.json())
				.catch((data) => {});
		}
	}

	function handleChange(event) {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value,
		})
	}

	return <div>
		<form onSubmit={handleSubmit}>
			<label htmlFor='firstName'>First Name</label>
			<input
				type='text'
				name='firstName'
				value={state.firstName}
				onChange={handleChange}
			/>

			<label htmlFor='lastName'>Last Name</label>
			<input
				type='text'
				name='lastName'
				value={state.lastName}
				onChange={handleChange}
			/>

			<label htmlFor='email'>Email</label>
			<input
				type='text'
				name='email'
				value={state.email}
				onChange={handleChange}
				placeholder='johndoe@someone.com'
			/>

			<label htmlFor='password'>Password</label>
			<input
				type='text'
				name='password'
				value={state.password}
				onChange={handleChange}
				minLength={passwordMinLength}
				placeholder='Must be at least 8 characters'
			/>

			<label htmlFor='confirmPassword'>Confirm Password</label>
			<input
				type='text'
				name='confirmPassword'
				value={state.confirmPassword}
				onChange={handleChange}
			/>

			<div>
				<button type='submit'>Sign Up</button>
			</div>
		</form>
	</div>;
};

export default SignupForm;
