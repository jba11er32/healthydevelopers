import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { API_URL } from '../config';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';

const SignupForm = () => {
	const passwordMinLength = 8

	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		showPassword: false,
		showConfirmPassword: false,
	})

	function handleClickShowPassword () {
		setState({ ...state, showPassword: !state.showPassword, showConfirmPassword: !state.showConfirmPassword })
	}

	function handleMouseDownPassword (event) {
		event.preventDefault();
	};

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
			<Input
				type='text'
				name='firstName'
				value={state.firstName}
				onChange={handleChange}
			/>

			<label htmlFor='lastName'>Last Name</label>
			<Input
				type='text'
				name='lastName'
				value={state.lastName}
				onChange={handleChange}
			/>

			<label htmlFor='email'>Email</label>
			<Input
				type='text'
				name='email'
				value={state.email}
				onChange={handleChange}
				placeholder='johndoe@someone.com'
			/>

			<label htmlFor='password'>Password</label>
			<Input
				type={state.showPassword ? 'text' : 'password'}
				name='password'
				value={state.password}
				onChange={handleChange}
				onClick={handleClickShowPassword}
				minLength={passwordMinLength}
				placeholder='Must be at least 8 characters'
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{state.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>

			<label htmlFor='confirmPassword'>Confirm Password</label>
			<Input
				type='text'
				name='confirmPassword'
				value={state.confirmPassword}
				onChange={handleChange}
				onClick={handleClickShowPassword}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{state.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>

			<div>
				<button type='submit'>Sign Up</button>
			</div>
		</form>
		<div>
			<p>Already have an account?</p>
				<a href='/'>
					<span>
						Log In
					</span>
				</a>
		</div>
	</div>;
};

export default SignupForm;
