import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'pages/Home';
import Auth from 'pages/Auth';
import Profile from 'pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/kakao/callback" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
