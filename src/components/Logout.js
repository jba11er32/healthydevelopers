import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch()

    function clearLocalStorage() {
        localStorage.clear()
        dispatch({
            type: "LOG_OUT"
        })
    }

    return (
        <div>
            
        </div>
    );
};

export default Logout;