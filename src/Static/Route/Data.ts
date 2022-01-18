import React from "react";
import { Test } from "../../Components/Test";


interface RoutesDataInterface {
    name: string,
    path: string,
    private: boolean,
    exact: boolean,
    component: React.FC
}

const _RoutesData: Array<RoutesDataInterface> = [
    {
        name: "Home",
        path: "/",
        private: true,
        exact: true,
        component: Test
    }
];



export type { RoutesDataInterface }
export { _RoutesData }