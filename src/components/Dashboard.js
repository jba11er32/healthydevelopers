import React from 'react';

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
		</ul>
	</div>;
};

export default Dashboard;
