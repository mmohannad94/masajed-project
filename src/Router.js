import Home from "./pages/home";
import masajed from "./pages/Masajed";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
export default [
    {
        link: '/',
        component: Home,
        name: 'Home'

    },
    {
        link: '/masajed',
        component: masajed,
        name: 'masajed',
        hidden: true
    },
    {
        link: '/Profile',
        component: Profile,
        name: 'Profile',
        hidden: true
    },
    {
        link: '/error',
        component: PageNotFound,
        name: 'Page not found',
        hidden: true
    }

];






















