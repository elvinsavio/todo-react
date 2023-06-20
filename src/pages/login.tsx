import React, { useState } from 'react';
import Input from '../components/input/input';
import { Tabs } from '../components/ui/tab/tabs';
import Form from '../components/ui/form/form';
import { Button } from '../components/button/button';
import { AnimatePresence } from 'framer-motion';

interface ILogin {
  username: string;
  password: string;
  showPassword: boolean;
}

interface ISignup {
  username: string;
  password: string;
  cPassword: string;
  showPassword: boolean;
  showCPassword: boolean;
}

type tab = 'login' | 'signup';

export default function Login() {
  const [tab, setTab] = useState<tab>('login');

  const [login, setLogin] = useState<ILogin>({
    username: '',
    password: '',
    showPassword: false,
  });

  const [signup, setSignup] = useState<ISignup>({
    username: '',
    password: '',
    cPassword: '',
    showPassword: false,
    showCPassword: false,
  });

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
          {tab === 'login' && <LoginForm login={login} setLogin={setLogin} />}
          {tab === 'signup' && <SignupForm signup={signup} setSignup={setSignup} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface LoginFormProps {
  login: ILogin;
  setLogin: React.Dispatch<React.SetStateAction<ILogin>>;
}
const LoginForm = ({ login, setLogin }: LoginFormProps) => {
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
        <Button.Submit onClick={() => console.log('click')} />
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
