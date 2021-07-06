import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
	let history = useHistory();

	function handleClick() {
		history.push('/myhome')
	}

	return <div>
		<ul>
			<li onClick={handleClick}>
				<Link to='/myhome'>home</Link>
			</li>
			<li>
				<Link to='/today'>today</Link>
			</li>
			<li>
				<Link to='/month'>month</Link>
			</li>
			<li>
				<Link to='/about'>about</Link>
			</li>
			<li>
				<Link to='/'>logout</Link>
			</li>
		</ul>
	</div>;
};

export default Dashboard;
