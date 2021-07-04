import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

const LoginForm = () => {

	const [state, setState] = useState({
		email: '',
		password: '',
	});

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

		const url = `${API_URL}/users/login`;

		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(userData),
		})
			.then((response) => response.json())
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
				<label htmlFor='email'>
					Email
					<input
						type='text'
						name='email'
						value={state.email}
						onChange={handleChange}
						placeholder='Email'
					/>
				</label>

				<label htmlFor='password'>
					Password
					<input
						type='password'
						name='password'
						value={state.password}
						onChange={handleChange}
						placeholder='Password'
					/>
				</label>

				<div>
					<button type='submit'>Log In</button>
				</div>

				<div className='divide-line'></div>

				<div>
					<Link to='/users/signup'>
						<button type='button'>Sign Up</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
