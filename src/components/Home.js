import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';

const Home = () => {
	const [state, setState] = useState({
            date: new Date(),
    })
	const user = useSelector(state => state.firstName);

    function handleChange (date) {
        setState({ date })
    }

    return (
        <div >
            {/* imported from react-calendar */}
            <Calendar 
                onChange={handleChange}
                value={state.date}
            />
			<h2>Welcome {user.firstName}</h2>
        </div>
    );
};

export default Home;
