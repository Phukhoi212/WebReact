import React from 'react';
import Login from './containers/Login/Login';
import DashBoard from './containers/DashBoard/DashBoard';
import SignUp from './containers/Login/SignUp'



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <DashBoard />
    },

    {
        path : '/signup',
        exact : true,
        main : () => <SignUp />
    },

    {
        path: '/login',
        exact: true,
        main: () => <Login />
    }

];

export default routes;