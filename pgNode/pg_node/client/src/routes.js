//import Users from './pages/Users';
//import User from './pages/User';
import Home from './pages/mainPage/Home';
import DetailPage from './pages/detailPage/detailGamePage';
//import Movies from './pages/Movies';
import memberPage from './pages/mainPage/newPage';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/member',
        component: memberPage
    },
    
    {
        path: '/detailPage/:gameNo',
        component: DetailPage
    }
];