// import React from  'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { FeedRoutes } from './Feed/Routes';

function Main(): JSX.Element {
    return (
        <Router>
            <FeedRoutes />
        </Router>
    )
}




export { Main }