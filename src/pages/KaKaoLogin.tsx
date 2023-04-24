import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "atoms/userAtom";

export default function KaKaoLogin() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const params = new URL(document.URL).searchParams;
  const code = params.get("code");
  if (!code) {
    () => navigate("/");
  } else {
    setIsLoggedIn(true);
    navigate("/MyPage");
  }
  return <div>Login 중입니다.. </div>;
}
