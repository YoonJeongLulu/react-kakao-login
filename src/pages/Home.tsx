import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { KAKAO_AUTH_URL } from 'config';
import { isLoggedInAtom } from 'atoms/isLoggedInAtom';

export default function Home() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate('/profile');
  };
  return (
    <div>
      <p>Welcome!</p>
      <p>{isLoggedIn ? <button onClick={() => onClickBtn()}>마이페이지</button> : <Login />}</p>
    </div>
  );
}

function Login() {
  return <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a>;
}
