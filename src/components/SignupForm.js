import React, { useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
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
	})

	const [confirmPassword, setConfirmPassword] = useState({
		confirmPassword: '',
		showPassword: false,
		showConfirmPassword: false,
	})

	function handleClickShowPassword () {
		setConfirmPassword({ ...confirmPassword, showPassword: !confirmPassword.showPassword, showConfirmPassword: !confirmPassword.showConfirmPassword })
	}

	function handleMouseDownPassword (event) {
		event.preventDefault();
	};

	function handleSubmit(event) {
		event.preventDefault();
		console.log(state)

		const url = `${API_URL}/users/signup`;
		
		// const url = 'https://healthydevelopers-jl.herokuapp.com/users/signup'

		if(state.password !== confirmPassword.confirmPassword) {
			alert("Passwords do not match");
		} else {		
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(state),
			})
				.then((res) => res.json())
				.then((data) => {})
				.catch((err) => {console.log(err)});
		}
	}

	function handleChange(event) {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value,
		})
	}

	function handleConfirmChange(event) {
		const value = event.target.value;
		setConfirmPassword({
			...confirmPassword,
			[event.target.name]: value,
		})
	}

	return <div>
		<form onSubmit={handleSubmit}>
			<Input
				type='text'
				name='firstName'
				value={state.firstName}
				onChange={handleChange}
				placeholder='First Name'
				required
			/>

			<Input
				type='text'
				name='lastName'
				value={state.lastName}
				onChange={handleChange}
				placeholder='Last Name'
				required
			/>

			<Input
				type='text'
				name='email'
				value={state.email}
				onChange={handleChange}
				placeholder='johndoe@someone.com'
				required
			/>

			<Input
				type={state.showPassword ? 'text' : 'password'}
				name='password'
				value={state.password}
				onChange={handleChange}
				onClick={handleClickShowPassword}
				minLength={passwordMinLength}
				placeholder='Password'
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
				required
			/>

			<Input
				type={state.showConfirmPassword ? 'text' : 'password'}
				name='confirmPassword'
				value={confirmPassword.confirmPassword}
				onChange={handleConfirmChange}
				onClick={handleClickShowPassword}
				placeholder='Confirm Password'
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
				required
			/>

			<div>
				{/* <Link to={`/`}> */}
					<button type='submit'>Sign Up</button>
				{/* </Link> */}
			</div>
		</form>
		<div>
			<p>Already have an account?</p>
				<Link to='/'>
					<span>
						Log In
					</span>
				</Link>
		</div>
	</div>;
};

export default SignupForm;
