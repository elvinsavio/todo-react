import { useState } from 'react';
import { Button } from '../components/button/button';
import Login from './login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (!isLoggedIn) return <Login />;
  return (
    <div className="bg-slate-700 min-h-screen text-white flex justify-center items-center">
      <Button label="Hello World" />
    </div>
  );
}
