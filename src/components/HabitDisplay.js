import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import HabitCard from './HabitCard';


const HabitDisplay = () => {

    const [userHabits, setUserHabits] = useState()

    useEffect(() => {
        const url = 'https://healthydevelopers-jl.herokuapp.com/habits'

        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(habits => {
                console.log(userHabits)
                setUserHabits(habits)
                console.log(userHabits)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if (!userHabits) {
        return <h1>LOADING...</h1>
    }

    // Return all habits by user
    return (
        <div>
            <Dashboard />
            {
                userHabits.map((habit) => {
                    return (
                        <Link to={`/habits/${habit._id}`}>
                            <HabitCard habit={habit} />
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default HabitDisplay;