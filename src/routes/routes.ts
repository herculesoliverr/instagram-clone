import React from 'react';
import { Route, useRoutes, Redirect } from 'react-router-dom';
import { Autenticate } from './Auth/Autenticate';


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    Autenticate() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{pathname: "/login", state: {from: props.location} }} />
    )
  )}/>
)