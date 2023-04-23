export default function Home() {
  const REST_API_KEY = '1294918f6ca920c7d3f491931a53ced6';
  const REDIRECT_URI = 'http://localhost:5173/auth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <div>
      Home
      <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a>
    </div>
  );
}
