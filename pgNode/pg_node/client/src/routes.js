//import Users from './pages/Users';
//import User from './pages/User';
import Home from './pages/mainPage/Home';
import DetailPage from './pages/detailPage/detailGamePage';
import memberPage from './pages/mainPage/newPage';

export default [
    {
        path: '/',
        component: Home,
        exact:true
    },
    {
        path: '/member',   
        component: memberPage
    },
    
    {
        path: '/detailpage/:gameNo',
        component: DetailPage
    }
];