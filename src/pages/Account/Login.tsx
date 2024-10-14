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
      <div className="form">
        <div className='form-item'>
          <div className='form-item-title'>手机号</div>
          <input
            value={phoneNumber}
            className='form-item-content'
            placeholder='请输入手机号码'
            onChange={(e) => { setPhoneNumber(e.target.value) }}
          />
        </div>
        <div className='form-item'>
          <div className='form-item-title'>密码</div>
          <input
            value={password}
            type="password"
            className='form-item-content'
            placeholder='请输入密码'
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
      </div>
      <div className="submit" onClick={handleSubmitBtnClick}>
        登陆
      </div>
      <p className="notice">
        *登录即表示您赞同使用条款及隐私政策
      </p>
    </>
  )
}

export default Login;