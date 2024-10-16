import { Toast } from 'antd-mobile';
import { useState } from 'react';
import useRequest from '../../utils/useRequest';

// 返回内容类型
type ResponseType = {
  success: boolean;
  data: boolean;
}

const Register = () => {
  const [ userName, setUserName ] = useState('');
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ checkPassword, setCheckPassword ] = useState('');
  
  const { request } = useRequest<ResponseType>();
  // 点击注册按钮时的操作
  function handleSubmitBtnClick() {
    if(!userName) {
      Toast.show({
        icon: 'fail',
        content: '用户不得为空！',
      })
      return;
    }
    if(!phoneNumber) {
      Toast.show({
        icon: 'fail',
        content: '手机号码不得为空！',
      })
      return;
    }
    if(!password) {
      Toast.show({
        icon: 'fail',
        content: '密码不得为空！',
      })
      return;
    }
    if(password.length < 6) {
      Toast.show({
        icon: 'fail',
        content: '密码至少为六位！',
      })
      return;
    }
    if(password !== checkPassword) {
      Toast.show({
        icon: 'fail',
        content: '两次输入密码不一致！',
      })
      return;
    }
    request({
      url: '/register.json',
      method: 'POST',
      data: {
        user: userName,
        phone: phoneNumber,
        password: password,
      }
    }).then((data) => {
      data && console.log(data);
    }).catch((e: any) => {
      Toast.show({
        icon: 'fail',
        content: e?.message || '未知异常',
      })
    });
  }

  return (
    <>
      <div className="mb-[.6rem]">
        <div className='account-form--item'>
          <div className='account-form--item__label'>用户名</div>
          <input
            value={userName}
            className='account-form--item__input'
            placeholder='请输入用户名'
            onChange={(e) => { setUserName(e.target.value) }}
          />
        </div>
        <div className='account-form--item'>
          <div className='account-form--item__label'>手机号</div>
          <input
            value={phoneNumber}
            className='account-form--item__input'
            placeholder='请输入手机号码'
            onChange={(e) => { setPhoneNumber(e.target.value) }}
          />
        </div>
        <div className='account-form--item'>
          <div className='account-form--item__label'>密码</div>
          <input
            value={password}
            type="password"
            className='account-form--item__input'
            placeholder='请输入密码'
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <div className='account-form--item'>
          <div className='account-form--item__label'>确认密码</div>
          <input
            value={checkPassword}
            type="password"
            className='account-form--item__input'
            placeholder='请输入确认密码'
            onChange={(e) => { setCheckPassword(e.target.value) }}
          />
        </div>
      </div>
      <div className="account-form--item__btn" onClick={handleSubmitBtnClick}>
        注册
      </div>
    </>
  )
}

export default Register;