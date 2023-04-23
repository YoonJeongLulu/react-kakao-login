import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtom, isLoggedInAtom } from './atoms/userAtom';

import Home from './pages/Home';
import KaKaoLogin from './pages/KaKaoLogin';
import MyPage from './pages/MyPage';

function App() {
  const setUser = useSetRecoilState(userAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

  // const initApp = () => {
  //   const hasToken = !!localStorage.getItem('kakaoToken');
  //   if (!hasToken) return;

  //   const userEmail = localStorage.getItem('email') || '';
  //   setIsLoggedIn(true);
  //   setUser({
  //     email: userEmail,
  //   });
  // };

  // useEffect(() => {
  //   initApp();
  // }, [setIsLoggedIn, setUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/kakao/callback" element={<KaKaoLogin />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
