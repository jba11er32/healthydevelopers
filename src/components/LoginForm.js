import React, { useState } from 'react';
import { API_URL } from '../config';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [state, setState] = useState({
		email: '',
		password: '',
		// showPassword: false,
		// showConfirmPassword: false,
		// results: []
	});

	const [confirmPassword, setConfirmPassword] = useState({
		showPassword: false,
		showConfirmPassword: false,
	})

	const [results, setResults] = useState({
		results: []
	})

	function handleClickShowPassword () {
		setConfirmPassword({ ...confirmPassword, showPassword: !confirmPassword.showPassword, showConfirmPassword: !confirmPassword.showConfirmPassword })
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
		// const userData = {
		// 	"email": state.email,
		// 	"password": state.password,
		// 	"results": []
		// };

		// const url = `${API_URL}/users/login`;
		const url = 'https://healthydevelopers-jl.herokuapp.com/users/login/'

		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(state),
		})
			.then((res) => res.json())
			.then((user) => {
				console.log(user)
				if (user.token) {
					localStorage.setItem('token', user.token)

					dispatch({
						type: 'SET_USER',
						payload: user.firstName
					})

					dispatch({
						type: 'SET_HABITS',
						payload: user.owner
					})

					history.push("/myhome")
				}
			})
			// .then(
			// 	setTimeout(() => {
			// 		window.location.reload(true);
			// 	}, 150)
			// )
			.catch((err) => {console.log(err)});
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
						{/* <Link to='/myhome'> */}
							<span>Log In</span>
						{/* </Link> */}
					</button>
				</div>

				<div className='divide-line'></div>

				<div>
					<p>Don't have an account?</p>
					<Link to='/signup'>
						<span>
							Sign Up
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
