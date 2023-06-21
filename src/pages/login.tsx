import React, { useState } from 'react';
import Input from '../components/input/input';
import { Tabs } from '../components/ui/tab/tabs';
import Form from '../components/ui/form/form';
import { Button } from '../components/button/button';
import { AnimatePresence } from 'framer-motion';

import { login as loginApi } from '../utils/apis';

interface ILogin {
  username: string;
  password: string;
  error: boolean;
  errorMessage: string;
  showPassword: boolean;
}

interface ISignup {
  username: string;
  password: string;
  cPassword: string;
  error: boolean;
  errorMessage: string;
  showPassword: boolean;
  showCPassword: boolean;
}

type tab = 'login' | 'signup';

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setIsLoggedIn }: LoginProps) {
  const [tab, setTab] = useState<tab>('login');

  const [login, setLogin] = useState<ILogin>({
    username: '',
    error: false,
    errorMessage: '',
    password: '',
    showPassword: false,
  });

  const [signup, setSignup] = useState<ISignup>({
    username: '',
    password: '',
    cPassword: '',
    error: false,
    errorMessage: '',
    showPassword: false,
    showCPassword: false,
  });

  const handleLoginIn = () => {
    loginApi(login.username, login.password).then((res) => {
      if (res.data.data.token) {
        localStorage.setItem('token', res.data.data.token);
        setIsLoggedIn(true);
      }
    });
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-white flex items-center justify-center">
      <div className="bg-black bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
        <Tabs>
          <Tabs.Header active={tab === 'login'} onClick={() => setTab('login')}>
            Login
          </Tabs.Header>
          <Tabs.Border />
          <Tabs.Header active={tab === 'signup'} onClick={() => setTab('signup')}>
            Sign up
          </Tabs.Header>
        </Tabs>
        <AnimatePresence>
          {tab === 'login' && <LoginForm login={login} setLogin={setLogin} onSubmit={handleLoginIn} />}
          {tab === 'signup' && <SignupForm signup={signup} setSignup={setSignup} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface LoginFormProps {
  login: ILogin;
  setLogin: React.Dispatch<React.SetStateAction<ILogin>>;
  onSubmit: () => void;
}
const LoginForm = ({ login, setLogin, onSubmit }: LoginFormProps) => {
  return (
    <Form animate={1}>
      <Input
        label="Username"
        type="text"
        value={login.username}
        onChange={(value) => setLogin((prev: ILogin) => ({ ...prev, username: value }))}
        placeholder="Username"
      />
      <Input
        label="Password"
        type="password"
        value={login.password}
        onChange={(value) => setLogin((prev) => ({ ...prev, password: value }))}
        placeholder="Password"
      />
      <div className="flex">
        <Button.Submit onClick={onSubmit} />
      </div>
    </Form>
  );
};

interface SignupFormProps {
  signup: ISignup;
  setSignup: React.Dispatch<React.SetStateAction<ISignup>>;
}
const SignupForm = ({ signup, setSignup }: SignupFormProps) => {
  return (
    <Form animate={-1}>
      <Input
        label="Username"
        type="text"
        value={signup.username}
        onChange={(value) => setSignup((prev) => ({ ...prev, username: value }))}
        placeholder="Username"
      />
      <Input
        label="Password"
        type="password"
        value={signup.password}
        onChange={(value) => setSignup((prev) => ({ ...prev, password: value }))}
        placeholder="Password"
      />
      <Input
        label="Confirm Password"
        type="password"
        value={signup.cPassword}
        onChange={(value) => setSignup((prev) => ({ ...prev, cPassword: value }))}
        placeholder="Password"
      />
      <div className="flex">
        <Button.Submit onClick={() => console.log('click')} />
      </div>
    </Form>
  );
};
