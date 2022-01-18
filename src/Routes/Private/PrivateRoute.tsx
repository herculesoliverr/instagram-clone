import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { Authenticate } from '../Auth/Authenticate';


// interface PrivateRouteProps {
//     component: React.FC
// }

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }): JSX.Element => (
    <Route {...rest} element={(props:any) => (
      Authenticate() ? (
        <Component {...props}/>
      ) : (
        <Navigate to="/login" replace state={props.location}  />
      )
    )}/>
)

export { PrivateRoute }