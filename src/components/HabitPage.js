import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HabitPage = ({ match, history }) => {
    const [habit, setHabit] = useState(null);

    useEffect(() => {
        const url = `https://healthydevelopers-jl.herokuapp.com/${match.params.id}`
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => {
                setHabit(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    function handleDelete () {
        const url = `https://healthydevelopers-jl.herokuapp.com/${match.params.id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                history.push('/myprofile')
            })
            .catch(err => console.log(err))
    }


    if (!habit) {
        return null
    }
        return (
            <div>
                <Link to={`/${match.params.id}/update`}>
                    <button>Update</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
                <ul>
                    <li>Water<hr />{habit.water}</li>
                    <li>Push Ups<hr />{habit.pushups}</li>
                    <li>Sit Ups<hr />{habit.situps}</li>
                    <li>Squats<hr />{habit.squats}</li>
                </ul>
            </div>
        )
    }

export default HabitPage;