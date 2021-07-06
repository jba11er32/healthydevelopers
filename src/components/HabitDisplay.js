import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import HabitCard from './HabitCard';


const HabitDisplay = () => {

    const [userHabits, setUserHabits] = useState()

    useEffect(() => {
        const url = 'https://healthydevelopers-jl.herokuapp.com/habits'

        fetch(url)
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
            {
                userHabits.map((habit) => {
                    return (
                        <Link to={`/habits/${habit._id}`}>
                            <HabitCard details={habit} />
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default HabitDisplay;