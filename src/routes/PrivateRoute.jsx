import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    // console.log(location)

    if (loading) {
        return <div className="skeleton flex mx-auto text-center bg-teal-600 bg-opacity-5 h-16 w-16 shrink-0 rounded-full"></div>
    }
    if (user) { 
        return children
    }
    return <Navigate to={'/signIn'} state={location?.pathname}></Navigate>

};

export default PrivateRoute; 