import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HabitForm = () => {
	const dailyInput = {
		water: '',
		pushups: '',
		situps: '',
		squats: '',
	};

	const [dailyData, setDailyData] = useState(dailyInput);

	const handleChange = (event) => {
		setDailyData({ ...dailyData, [event.target.id]: event.target.value });
	};


	function handleSubmit(event) {
		event.preventDefault();
		const url = `https://healthydevelopers-jl.herokuapp.com/create`;
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(dailyData),
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((habit) => {
				console.log('Success:', habit);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='water'>Water</label>
				<input
					id='water'
					type='text'
					value={dailyData.water}
					onChange={handleChange}
					placeholder='0 cups'
				/>

				<label htmlFor='pushups'>Push-Ups</label>
				<input
					id='pushups'
					type='text'
					value={dailyData.pushups}
					onChange={handleChange}
					placeholder='0'
				/>

				<label htmlFor='situps'>Sit-Ups</label>
				<input
					id='situps'
					type='text'
					value={dailyData.situps}
					onChange={handleChange}
					placeholder='0'
				/>

				<label htmlFor='squats'>Squats</label>
				<input
					id='squats'
					type='text'
					value={dailyData.squats}
					onChange={handleChange}
					placeholder='0'
				/>

				<br />
				<Link to='/today'>
					<button	button type='submit' value='submit' >Submit</button>
				</Link>
			</form>
		</div>
	);
};

export default HabitForm;
