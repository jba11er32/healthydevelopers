import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

const Login = () => {
	const pwdMaxLength = 20;
	const pwdMinLength = 8;

	const [state, setState] = useState({
		email: '',
		password: '',
	});

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

	function handleChange(event) {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value,
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Email
					<input
						type='text'
						name='email'
						value={state.email}
						onChange={handleChange}
						placeholder='someone@someone.com'
					/>
				</label>

				<label>
					Password
					<input
						type='password'
						name='password'
						value={state.password}
						onChange={handleChange}
						minLength={pwdMinLength}
						maxLength={pwdMaxLength}
						placeholder='8-20 characters'
					/>
				</label>

				<div>
					<button type='submit'>Log In</button>
				</div>

				<div className='divide-line'></div>

				<div>
					<Link to='/signup'>
						<button type='button'>Sign Up</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
