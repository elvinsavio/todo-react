import { motion } from 'framer-motion';
import type { tabs } from '../../../pages/home';
import { ReactNode } from 'react';

interface Props {
  tab: tabs;
  setTab: React.Dispatch<React.SetStateAction<tabs>>;
}
export default function Header({ tab, setTab }: Props) {
  return (
    <header className="h-10 p-4 flex items-center justify-between bg-neutral-900 ">
      <div className="flex gap-2">
        <Link active={tab === 'todo'} tab="todo" onClick={(tab) => setTab(tab)}>
          Todo
        </Link>
        <Link active={tab === 'checklists'} tab="checklists" onClick={(tab) => setTab(tab)}>
          Checklists
        </Link>
        <Link active={tab === 'notes'} tab="notes" onClick={(tab) => setTab(tab)}>
          Notes
        </Link>
      </div>
      <LogoutButton />
    </header>
  );
}

const LogoutButton = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <button className="" onClick={logout}>
      Logout
    </button>
  );
};

const Link = ({
  children,
  active,
  onClick,
  tab,
}: {
  children: ReactNode;
  active: boolean;
  tab: tabs;
  onClick: React.Dispatch<React.SetStateAction<tabs>>;
}) => {
  return (
    <a
      onClick={() => onClick(tab)}
      className={` cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 transition-all flex flex-col justify-center items-center rounded `}
    >
      {children} {active && <motion.div layoutId="underline" className="h-1 w-[130%] bg-orange-500 rounded" />}
    </a>
  );
};
