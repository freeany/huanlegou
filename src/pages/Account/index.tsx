import { Link, Outlet, useLocation } from 'react-router-dom';
import './style.scss';

const Account = () => {
  const location = useLocation();
  const isLoginActivated = location.pathname === '/account/login';
  const loginActiveClass = isLoginActivated ? 'tab-item-active': '';
  const regsiterActiveClass = !isLoginActivated ? 'tab-item-active': '';

  return (
    <div className="page account-page">
      <div className="tab">
        <div className={`tab-item tab-item-left ${loginActiveClass}`}>
          <Link to='/account/login'>登陆</Link>
        </div>
        <div className={`tab-item tab-item-right ${regsiterActiveClass}`}>
          <Link to='/account/register'>注册</Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Account;