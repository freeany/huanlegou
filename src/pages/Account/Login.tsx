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
        <div className='flex py-[.16rem] pl-[.3rem] pr-[.3rem] leading-[.24rem] text-[.16rem]'>
          <div className='w-[.7rem] mr-[.2rem]'>手机号</div>
          <input
            value={phoneNumber}
            className='flex-auto border-none outline-0 text-[#242424] placeholder-[#D9D9D9]'
            placeholder='请输入手机号码'
            onChange={(e) => { setPhoneNumber(e.target.value) }}
          />
        </div>
        <div className='flex py-[.16rem] pl-[.3rem] pr-[.3rem] leading-[.24rem] text-[.16rem]'>
          <div className='w-[.7rem] mr-[.2rem]'>密码</div>
          <input
            value={password}
            type="password"
            className='flex-auto border-none outline-0 text-[#242424] placeholder-[#D9D9D9]'
            placeholder='请输入密码'
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
      </div>
      {/* margin: 0 .3rem .94rem .3rem; */}
      <div className="my-0 mr-[.3rem] mb-[.94rem] ml-[.3rem] leading-[.5rem] rounded bg-[#73D13D] shadow-[0_.06rem_0.06rem_0_#D9F7BE] text-[.16rem] text-[#fff] text-center" onClick={handleSubmitBtnClick}>
        登陆
      </div>
      <p className="text-[#cf1322] text-[.16rem] leading-[.24rem] tracking-normal text-center">
        *登录即表示您赞同使用条款及隐私政策
      </p>
    </>
  )
}

export default Login;