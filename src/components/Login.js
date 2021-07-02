import React, { useState } from 'react';
import { API_URL } from '../config';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		const userData = {
			email: userName,
			password: password,
		};
	}

	return <div></div>;
};

export default Login;
