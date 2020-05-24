import React from 'react';
import Login from './containers/Login/Login';
import DashBoard from './containers/DashBoard/DashBoard';
import Home from './containers/Home/Home';
import SignUp from './containers/SignUp/SignUp';
import Detail from './containers/Details';
import BuyProduct from './containers/BuyProduct';
import Admin from './containers/Manager/Admin';



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
    },
    {
        path: '/detail',
        exact: true,
        main: () => <Detail />
    },
    {
        path: '/detail/buy',
        exact: true,
        main: () => <BuyProduct />
    },
    {
        path: '/dashboard',
        exact: true,
        main: () => <DashBoard />
    },
    {
        path: '/admins',
        exact: true,
        main: () => <Admin />,
    }

];

export default routes;