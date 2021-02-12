import Feed from '../pages/Feed';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Users from '../pages/Users';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import CreatePost from '../pages/CreatePost';
import Followers from '../containers/Followers';
import Followings from '../containers/Followings';

export const routes = {
  feed: {
    path: '/',
    exact: true,
    component: Feed
  },
  login: {
    path: '/login',
    component: Login
  },
  registration: {
    path: '/registation',
    component: Registration
  },
  users: {
    path: '/users',
    component: Users
  },
  profile: {
    path: '/profile',
    component: Profile
  },
  settings: {
    path: '/settings',
    component: Settings
  },
  createPost: {
    path: '/new_post',
    component: CreatePost
  },
  followers: {
    path: '/followers/:id',
    component: Followers
  },
  followings: {
    path: '/followings/:id',
    component: Followings
  },
}