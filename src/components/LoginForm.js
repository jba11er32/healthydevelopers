import React, { useState } from 'react';
import { API_URL } from '../config';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {

	const [state, setState] = useState({
		email: '',
		password: '',
		showPassword: false,
		showConfirmPassword: false,
		results: []
	});

	function handleClickShowPassword () {
		setState({ ...state, showPassword: !state.showPassword, showConfirmPassword: !state.showConfirmPassword })
	}

	function handleMouseDownPassword (event) {
		event.preventDefault();
	};

	function handleChange(event) {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value,
		});
	}
	
	function handleSubmit(event) {
		event.preventDefault();
		const userData = {
			"email": state.email,
			"password": state.password
		};

		const url = `${API_URL}/`;

		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => {
				window.localStorage.setItem('token', data.token);
				window.localStorage.setItem('userId', data.foundUser._id);
			})
			.then(
				setTimeout(() => {
					window.location.reload(true);
				}, 150)
			)
			.catch((data) => {});
	}


	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					type='text'
					name='email'
					value={state.email}
					onChange={handleChange}
					placeholder='Email'
					required
				/>

				<Input
					type={state.showPassword ? 'text' : 'password'}
					name='password'
					value={state.password}
					onChange={handleChange}
					onClick={handleClickShowPassword}
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

				<div>
					<button type='submit'>
						<a href='/myhome'>
							<span>Log In</span>
						</a>
					</button>
				</div>

				<div className='divide-line'></div>

				<div>
					<p>Don't have an account?</p>
					<a href='/signup'>
						<span>
							Sign Up
						</span>
					</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
