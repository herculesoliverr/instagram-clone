import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import { RoutesDataInterface, _RoutesData } from '../../Static/Route/Data';
// import { PrivateRoute } from '../Private/PrivateRoute';



function FeedRoutes (): JSX.Element {
    return (
        <Routes>
            {_RoutesData.map((route: RoutesDataInterface, key: number) => {
                return <Route key={key} path={route.path} element={((Component: React.FC ) => <Component /> )(route.component)} />
            })}
        </Routes>
    )
}


export { FeedRoutes }