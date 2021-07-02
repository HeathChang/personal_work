//import Users from './pages/Users';
//import User from './pages/User';
import Home from './pages/mainPage/Home';
import DetailPage from './pages/detailPage/detailGamePage';
//import Movies from './pages/Movies';

export default [
    {
        path: '/',
        component: Home
    },
    // {
    //     path: '/movies',
    //     component: Movies
    // },
    // {
    //     path: '/users',
    //     component: Users
    // },
    {
        path: '/detailPage/:gameNo',
        component: DetailPage
    }
];