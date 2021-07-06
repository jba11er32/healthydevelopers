import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch()

    function handleLogOut() {
        localStorage.clear()
        dispatch({
            type: "LOG_OUT"
        })
    }

    return (
        <>
            <Link onClick={handleLogOut} to='/'>
                log out
            </Link>
        </>
    );
};

export default Logout;