import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "atoms/userAtom";

export default function MyPage() {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  return <div>{isLoggedIn ? "true" : "false"}</div>;
}
