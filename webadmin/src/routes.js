import React from 'react';
import Login from './containers/Login/Login';
//import DashBoard from './containers/DashBoard/DashBoard';
import Home from './containers/Home/Home';
import SignUp from './containers/Login/SignUp'



const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
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