import { useState } from 'react';
import Header from '../components/ui/header/header';
import Todo from './home/todo';

export type tabs = 'todo' | 'checklists' | 'notes';

export default function Home() {
  const [tab, setTab] = useState<tabs>('todo');

  return (
    <div className="bg-black min-h-screen text-white ">
      <Header tab={tab} setTab={setTab} />
      <div className="h-100 bg-black w-full p-1">{tab === 'todo' && <Todo />}</div>
    </div>
  );
}
