import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}, props) => {

    return (
        
        <Route
        {...rest} 
        render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            }
            console.log('Redirecting to Login Page, Failed to Login')
            return <Redirect to="/" />
        }}
        />
    )
}

export default PrivateRoute;