import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
	const [state, setState] = useState({
            date: new Date(),
    })

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
			<h2>Welcome {localStorage.name}</h2>
        </div>
    );
};

export default Home;
