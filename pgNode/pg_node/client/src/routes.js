//import Users from './pages/Users';
//import User from './pages/User';
import Home from './pages/mainPage/Home';
import DetailPage from './pages/detailPage/detailGamePage';
import memberPage from './pages/mainPage/newPage';
import NewsPage from './pages/news/NewsPage';
import boardList from './pages/board/boardList';
import LoginPage from './pages/member/LoginPage';
import RegisterPage from './pages/member/RegisterPage';

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
    },
    {
        path: '/board',
        component: boardList
    },
    {
        path: '/board/:boardNo',
        component: DetailPage
    },
    {
        path: '/news',
        component: NewsPage
    },
    {
        path: '/login',
        component: LoginPage
    },

    {
        path: '/register',
        component: RegisterPage
    }

];