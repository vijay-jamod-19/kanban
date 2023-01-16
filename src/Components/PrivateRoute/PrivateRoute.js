import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const loginData = JSON.parse(localStorage.getItem('authData'));
    if(!loginData || !loginData.token){
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute