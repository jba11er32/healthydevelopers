import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
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
                setUserHabits(habits)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    if (!userHabits) {
        return (
            <div>
                <h3>You have not updated your daily habits today.</h3>
                <Link to='/create'>
                    <button>Update now</button>
                </Link>
            </div>

        )
    }

    // Return all habits by user
    return (
        <div>
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