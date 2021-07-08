import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Register from '../pages/Register'
import Features from '../pages/Features'
import Pricing from '../pages/Pricing'
import About from '../pages/About'
import Profile from '../pages/Profile'
import notFound404 from '../pages/notFound404'

const routes = [
  {
    path: '/',
    component: Home,
    isPrivate: false,
  },
  {
    path: '/login',
    component: Login,
    isPrivate: false,
  },
  {
    path: '/register',
    component: Register,
    isPrivate: false,
  },
  {
    path: '/features',
    component: Features,
    isPrivate: false,
  },
  {
    path: '/pricing',
    component: Pricing,
    isPrivate: false,
  },
  {
    path: '/about',
    component: About,
    isPrivate: false,
  },
  {
    path: '/profile',
    component: Profile,
    isPrivate: true,
  },
  {
    path: '/logout',
    component: Logout,
    isPrivate: false,
  },
  {
    path: '/*',
    component: notFound404,
    isPrivate: false,
  },
]

export default routes
