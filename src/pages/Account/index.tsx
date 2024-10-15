import { Link, Outlet, useLocation } from 'react-router-dom';
// import './style.scss';

const Account = () => {
  const location = useLocation();
  const isLoginActivated = location.pathname === '/account/login';
  const loginActiveClass = isLoginActivated ? 'text-[#73D13D]': '';
  const regsiterActiveClass = !isLoginActivated ? 'text-[#73D13D]': '';

  return (
    <div className="page">
      <div className="w-[1.14rem] leading-[.21rem] mx-auto my-0 pt-2 pb-[.77rem] text-[.18rem]">
        <div className={`inline-block font-bold float-right`}>
          <Link className={`text-[#242424] no-underline ${loginActiveClass}`} to='/account/login'>登陆</Link>
        </div>
        <div className={`tab-item tab-item-right`}>
          <Link className={`text-[#242424] no-underline ${regsiterActiveClass}`} to='/account/register'>注册</Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Account;