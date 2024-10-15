import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Guide = () => {
  // 处理动画相关的逻辑
  const ref = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    ref.current.style.opacity = '1';
  }, [])

  // 处理页面跳转相关的逻辑
  const navigate = useNavigate();
  function handleIconClick() {
    navigate('/account/login');
  };

  return (
    <div ref={ref} className="page opacity-0 transition-opacity	duration-1500 pt-[.93rem]">
      <img
        alt="欢乐购"
        className="block w-[.86rem] h-[.7rem] pl-0 pr-0 mx-auto"
        src={require('../../images/halg_logo_icon_@2x.png')}
      />
      <p className='text-[#242424] text-[.2rem]  pt-[.29rem]
leading-[.23rem] tracking-normal	text-center'>欢乐购</p>
      <img
        alt="欢乐购"
        className="block w-8 h-5 mx-auto my-[0] mt-7"
        src={require('../../images/slogn_word_icon_@2x.png')}
      />
      <div
        className="iconfont absolute inset-x-0 bottom-[.73rem] text-center text-[#73D13D] leading-[.2rem]
text-[.2rem]
font-bold"
        onClick={handleIconClick}
      >&#xe60c;</div>
    </div>
  )
}

export default Guide;