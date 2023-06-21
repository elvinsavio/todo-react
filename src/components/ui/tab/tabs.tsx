import { ReactNode } from 'react';

interface HeaderProps {
  onClick: () => void;
  active: boolean;
  children: ReactNode;
  small?: boolean;
}

const Header = ({ children, active, onClick, small = false }: HeaderProps) => {
  return (
    <button
      onClick={onClick}
      className={`${small ? 'text-sm' : 'text-2xl'} font-bold text-center flex-1 py-1 transition-all bg-opacity-50' ${
        active && 'bg-slate-600'
      } `}
    >
      {children}
    </button>
  );
};

const Border = () => <span className="border-orange-500 border-r border-l" />;

interface TabsProps {
  children: ReactNode;
}
export const Tabs = ({ children }: TabsProps) => {
  return <div className="flex justify-around gap-0">{children}</div>;
};

Tabs.Header = Header;
Tabs.Border = Border;
