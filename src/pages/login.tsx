import { useState } from 'react';
import Input from '../components/input/input';
import { Tabs } from '../components/ui/tab/tabs';
import Form from '../components/ui/form/form';
import { Button } from '../components/button/button';

export default function Login() {
  type tab = 'login' | 'signup';
  const [tab, setTab] = useState<tab>('login');

  const [login, setLogin] = useState({
    username: '',
    password: '',
    showPassword: false,
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
        <Form>
          <Input
            label="Username"
            type="text"
            value={login.username}
            onChange={(value) => setLogin((prev) => ({ ...prev, username: value }))}
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
      </div>
    </div>
  );
}
