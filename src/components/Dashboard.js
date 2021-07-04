import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return <div>
		<ul>
			<li>
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
		</ul>
	</div>;
};

export default Dashboard;
