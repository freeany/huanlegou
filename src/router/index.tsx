import { createHashRouter } from 'react-router-dom'
import Account from '../pages/Account'
import Login from '../pages/Account/Login'
import Register from '../pages/Account/Register'
import Guide from '../pages/Guide'


export const router = createHashRouter([
  {
  path: '/',
  element: <Guide />
}, {
  path: '/account',
  element: <Account />,
  children: [{
    path: '/account/login',
    element: <Login />
  }, {
    path: '/account/register',
    element: <Register />
  }]
}])
