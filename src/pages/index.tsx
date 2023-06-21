import { useEffect, useState } from 'react';
import Home from './home';
import Login from './login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('token')) setIsLoggedIn(true);
  }, []);

  if (!isLoggedIn) return <Login setIsLoggedIn={setIsLoggedIn} />;
  return <Home />;
}
