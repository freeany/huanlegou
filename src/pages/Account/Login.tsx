import { useState } from 'react';
import { Toast } from 'antd-mobile'
import useRequest from '../../utils/useRequest';

// 返回内容类型
type ResponseType = {
  sussess: boolean;
  data: {
    token: string;
  }
}

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const { request } = useRequest<ResponseType>();
  // 点击登录按钮时的操作
  function handleSubmitBtnClick() {
    if (!phoneNumber) {
      Toast.show({
        icon: 'fail',
        content: '手机号码不得为空',
      })
      return;
    }
    if (!password) {
      Toast.show({
        icon: 'fail',
        content: '密码不得为空！',
      })
      return;
    }
    request({
      url: '/login.json',
      method: 'POST',
      data: {
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
      </div>
      {/* margin: 0 .3rem .94rem .3rem; */}
      <div className="account-form--item__btn" onClick={handleSubmitBtnClick}>
        登陆
      </div>
      <p className="text-[#cf1322] text-[.16rem] leading-[.24rem] tracking-normal text-center">
        *登录即表示您赞同使用条款及隐私政策
      </p>
    </>
  )
}

export default Login;